"use client";

import { useState } from "react";
import { Project, Testimonial, saveProject, saveTestimonial } from "@/lib/admin-data";

interface ProjectFormProps {
  project?: Project;
  onSave: () => void;
  onCancel: () => void;
}

export function ProjectForm({ project, onSave, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    summary: project?.summary || "",
    location: project?.location || "",
    type: project?.type || "residentieel" as "residentieel" | "commercieel",
    year: project?.year || new Date().getFullYear(),
    coverImage: project?.coverImage || "",
    tags: project?.tags?.join(", ") || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const projectData = {
      slug: formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      title: formData.title,
      summary: formData.summary,
      location: formData.location,
      type: formData.type,
      year: Number(formData.year),
      coverImage: formData.coverImage,
      gallery: [],
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
    };

    saveProject(projectData);
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {project ? "Project bewerken" : "Nieuw project toevoegen"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Titel
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Beschrijving
            </label>
            <textarea
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Locatie
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as "residentieel" | "commercieel" })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              >
                <option value="residentieel">Residentieel</option>
                <option value="commercieel">Commercieel</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Jaar
              </label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
                min="2000"
                max={new Date().getFullYear()}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Tags (komma gescheiden)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="nieuwbouw, renovatie, amsterdam"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Hoofdafbeelding URL
            </label>
            <input
              type="url"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-gold text-dark px-4 py-2 rounded-md font-semibold hover:bg-gold/90"
            >
              {project ? "Bijwerken" : "Toevoegen"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-slate-300 text-slate-700 px-4 py-2 rounded-md font-semibold hover:bg-slate-400"
            >
              Annuleren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
