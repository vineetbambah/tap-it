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
} from "@/components/ui/table";

const Checkins = () => {
  const checkins = useStore((state) => state.checkins);
  const fetchCheckins = useStore((state) => state.fetchCheckins);

  useEffect(() => {
    fetchCheckins();
  }, [fetchCheckins]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student ID</TableHead>
          <TableHead>Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {checkins.map((checkin, idx) => (
          <TableRow key={idx}>
            <TableCell>{checkin.student_id}</TableCell>
            <TableCell>{checkin.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Checkins;