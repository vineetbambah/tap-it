"use client"
import React, { useState } from "react";
import { useStore } from "../store";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const StudentAction = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addStudent = useStore((state) => state.addStudent);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent({ student_id: studentId, name, email });
    setStudentId("");
    setName("");
    setEmail("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-300 text-black px-4 py-2">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adding a Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="student_id">Student ID</Label>
              <Input
                id="studentid"
                name="student-id"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="12345678"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Pedro Duarte"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email-ID</Label>
              <Input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@xyc.com"
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default StudentAction;