import React from "react";
import "../styles/Subjects.css";

const Subjects = () => {
  const subjects = [
    {
      name: "Operating Systems",
      concepts: [
        "Processes & Threads",
        "CPU Scheduling Algorithms",
        "Memory Management (Paging, Segmentation)",
        "Virtual Memory",
        "Deadlocks: Detection, Prevention, Avoidance",
        "File Systems",
        "Disk Scheduling",
        "System Calls",
        "Process Synchronization (Semaphores, Monitors)"
      ],
    },
    {
      name: "Data Structures & Algorithms",
      concepts: [
        "Recursion & Backtracking",
        "Stacks, Queues, Linked Lists",
        "Trees & Binary Search Trees",
        "Graphs: BFS, DFS, Dijkstra",
        "Sorting Algorithms (Quick, Merge, Heap)",
        "Searching Algorithms (Binary Search)",
        "Hashing & Hash Tables",
        "Greedy Algorithms",
        "Divide and Conquer",
        "Dynamic Programming"
      ],
    },
    {
      name: "Object-Oriented Programming (OOPs)",
      concepts: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism (Compile-time & Runtime)",
        "Abstraction",
        "Classes & Objects",
        "Constructors & Destructors",
        "Interfaces vs Abstract Classes",
        "Exception Handling",
        "Access Modifiers",
        "SOLID Principles"
      ],
    },
  ];

  return (
    <section className="subjects-3d-section" id="subjects">
      <h2 className="subjects-title">Key Subjects</h2>
      <div className="subject-3d-container">
        {subjects.map((subject, index) => (
          <div
            className={`subject-3d-card ${index === 1 ? "center-card" : index === 0 ? "left-card" : "right-card"
              }`}
            key={index}
          >
            <h3>{subject.name}</h3>
            <ul>
              {subject.concepts.map((concept, i) => (
                <li key={i}>{concept}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subjects;
