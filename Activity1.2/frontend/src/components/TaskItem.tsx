
import React from "react";
import { Task } from "../types";

interface Props {
  task: Task;
  onOpen: (task: Task) => void;
  onToggle: (task: Task) => void;
}

export default function TaskItem({ task, onOpen, onToggle }: Props) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-4 flex items-start justify-between gap-4 hover:shadow-md transition">
      <div className="flex-1" onClick={() => onOpen(task)}>
        <div className="flex items-center justify-between gap-4">
          <h3 className={`font-semibold ${task.completed ? "line-through text-gray-400" : "text-gray-900 dark:text-white"}`}>
            {task.title}
          </h3>
        </div>

        {task.description && <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{task.description}</p>}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Due: {task.dueDate ? task.dueDate.slice(0,10) : "N/A"}</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed ?? false}
          onChange={(e) => { e.stopPropagation(); onToggle(task); }}
          className="w-5 h-5 accent-blue-600"
        />
      </div>
    </div>
  );
}
