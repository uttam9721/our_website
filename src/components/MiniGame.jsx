import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

const MiniGame = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#22d3ee");

  const colors = ["#22d3ee", "#facc15", "#4ade80", "#fb7185"];

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add / Edit Note
  const addNote = () => {
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex].text = input;
      updated[editIndex].color = selectedColor;
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([...notes, { text: input, color: selectedColor }]);
    }

    setInput("");
  };

  // Delete
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Edit
  const handleEdit = (index) => {
    setInput(notes[index].text);
    setSelectedColor(notes[index].color);
    setEditIndex(index);
  };

  // Drag
  const handleDrag = (result) => {
    if (!result.destination) return;

    const items = Array.from(notes);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setNotes(items);
  };

  // Export
  const exportNotes = () => {
    const text = notes.map((n) => n.text).join("\n");
    const blob = new Blob([text], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "notes.txt";
    link.click();
  };

  return (
    <section
      className="relative py-24 overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] text-white"
    >
      {/* GRID */}
      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] 
      bg-green-500/20 blur-[120px] top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
            Try My Work Live
          </span>{" "}
          <span className="text-yellow-400">🚀</span>
        </h2>

        {/* COLOR PICKER */}
        <div className="flex justify-center gap-3 mb-6">
          {colors.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedColor(c)}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                selectedColor === c ? "border-white" : "border-transparent"
              }`}
              style={{ background: c }}
            ></div>
          ))}
        </div>

        {/* INPUT */}
        <div className="flex gap-4 mb-10">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write something..."
            className="flex-1 px-5 py-3 rounded-xl 
            bg-white/5 border border-white/10 outline-none 
            focus:border-cyan-400"
          />

          <button
            onClick={addNote}
            className="px-6 py-3 rounded-xl 
            bg-gradient-to-r from-cyan-400 to-blue-500 text-black 
            hover:scale-105 transition"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* EXPORT */}
        <button
          onClick={exportNotes}
          className="mb-8 px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:scale-105 transition"
        >
          Export Notes 📤
        </button>

        {/* NOTES LIST */}
        <DragDropContext onDragEnd={handleDrag}>
          <Droppable droppableId="notes">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="grid gap-4"
              >
                {notes.map((note, index) => (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex justify-between items-center p-4 rounded-xl 
                        bg-white/5 border border-white/10 backdrop-blur-md"
                        style={{
                          borderLeft: `5px solid ${note.color}`,
                        }}
                      >
                        <span>{note.text}</span>

                        <div className="flex gap-3">
                          <button onClick={() => handleEdit(index)}>✏️</button>
                          <button onClick={() => deleteNote(index)}>❌</button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </div>
    </section>
  );
};

export default MiniGame;