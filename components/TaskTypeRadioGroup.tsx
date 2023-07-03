﻿import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

const taskTypes = [
  {
    id: "todo",
    name: "To do",
    description: "Lägg till en ny uppgift",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In progress",
    description: "Uppgift som är påbörjad",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "Uppgift som är klar",
    color: "bg-green-500",
  },
];

function TaskTypeRadioGroup() {
  const [newTaskType, setNewTaskType] = useBoardStore((state) => [
    state.newTaskType,
    state.setNewTaskType,
  ]);
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={newTaskType}
          onChange={(e) => {
            setNewTaskType(e);
          }}
        >
          <div className="space-y-2">
            {taskTypes.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) =>
                  `
                  ${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? type.color : "bg-gray-200"
                  } relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {type.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-white" : "text-gray-500"
                            }`}
                          >
                            {type.description}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckCircleIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default TaskTypeRadioGroup;
