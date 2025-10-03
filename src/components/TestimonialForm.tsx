"use client";

import { useState } from "react";
import { Testimonial, saveTestimonial } from "@/lib/admin-data";

interface TestimonialFormProps {
  testimonial?: Testimonial;
  onSave: () => void;
  onCancel: () => void;
}

export function TestimonialForm({ testimonial, onSave, onCancel }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    author: testimonial?.author || "",
    company: testimonial?.company || "",
    quote: testimonial?.quote || "",
    rating: testimonial?.rating || 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const testimonialData = {
      author: formData.author,
      company: formData.company || undefined,
      quote: formData.quote,
      rating: Number(formData.rating),
    };

    saveTestimonial(testimonialData);
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {testimonial ? "Referentie bewerken" : "Nieuwe referentie toevoegen"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Naam *
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Bedrijf (optioneel)
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Beoordeling
            </label>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5 sterren)</option>
              <option value={4}>⭐⭐⭐⭐ (4 sterren)</option>
              <option value={3}>⭐⭐⭐ (3 sterren)</option>
              <option value={2}>⭐⭐ (2 sterren)</option>
              <option value={1}>⭐ (1 ster)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Referentie tekst *
            </label>
            <textarea
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold"
              placeholder="Wat vond de klant van het project..."
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-gold text-dark px-4 py-2 rounded-md font-semibold hover:bg-gold/90"
            >
              {testimonial ? "Bijwerken" : "Toevoegen"}
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
