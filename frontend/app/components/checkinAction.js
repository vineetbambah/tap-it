"use client"
import React, { useState } from "react";
import { useStore } from "../store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CheckInAction = () => {
  const [studentId, setStudentId] = useState("");
  const addCheckin = useStore((state) => state.addCheckin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCheckin({ student_id: studentId});
    setStudentId("");
    setTimestamp("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-300 text-black px-4 py-2">Add Check-In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adding a Check-In</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="studentid">Student ID</Label>
              <Input
                id="studentid"
                name="student-id"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="12345678"
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Check-In</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckInAction;