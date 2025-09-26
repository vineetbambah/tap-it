"use client"
import React, { useEffect } from "react";
import { useStore } from "../store";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Students = () => {
    const students = useStore((state) => state.students);
    const fetchStudents = useStore((state) => state.fetchStudents);

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>E-Mail</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {students.map((student) => (
                    <TableRow key={student.student_id}>
                        <TableCell className="font-medium">{student.student_id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Students;