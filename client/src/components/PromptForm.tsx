import React, { useState } from "react";

const PromptForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userRole: "",
    yearsOfExperience: "",
    pastExperience: "",
    skillsInput: "",
    domain: "",
    wordLimit: "",
    includeMetrics: "Yes",
    bulletCount: "",
  });
  const [skills, setSkills] = useState<string[]>([]);
  const [generatedPoints, setGeneratedPoints] = useState<string[]>([
    "Example point 1 for testing",
    "Example point 2 for testing",
    "Example point 3 for testing",
  ]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && formData.skillsInput.trim()) {
      e.preventDefault();
      setSkills((prev) => [...prev, formData.skillsInput.trim()]);
      setFormData((prev) => ({ ...prev, skillsInput: "" }));
    }
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate generated points based on form data (this would be replaced by API logic)
    const points = Array.from(
      { length: Number(formData.bulletCount) || 0 },
      (_, index) => `Generated Point ${index + 1} for role ${formData.userRole}`
    );

    setGeneratedPoints(points);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6 animate-fadeIn"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Prompt Configuration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* User Role */}
          <div className="relative">
            <label
              htmlFor="userRole"
              className="block text-sm font-medium text-gray-600"
            >
              User Role
            </label>
            <input
              type="text"
              id="userRole"
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Enter user role"
              required
            />
          </div>

          {/* Years of Experience */}
          <div className="relative">
            <label
              htmlFor="yearsOfExperience"
              className="block text-sm font-medium text-gray-600"
            >
              Years of Experience
            </label>
            <input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Enter years of experience"
              required
            />
          </div>

          {/* Domain */}
          <div className="relative">
            <label
              htmlFor="domain"
              className="block text-sm font-medium text-gray-600"
            >
              Domain
            </label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Enter domain"
              required
            />
          </div>

          {/* Skills */}
          <div className="relative col-span-1 sm:col-span-2 lg:col-span-3">
            <label
              htmlFor="skillsInput"
              className="block text-sm font-medium text-gray-600"
            >
              Programming Languages/Frameworks/Libraries
            </label>
            <input
              type="text"
              id="skillsInput"
              name="skillsInput"
              value={formData.skillsInput}
              onChange={handleChange}
              onKeyDown={handleSkillAdd}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Type a skill and press Enter"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm rounded-lg cursor-pointer hover:bg-blue-600"
                  onClick={() => removeSkill(skill)}
                >
                  {skill}{" "}
                  <span className="ml-2 text-lg font-bold">&times;</span>
                </span>
              ))}
            </div>
          </div>

          {/* Past Experience */}
          <div className="relative col-span-1 sm:col-span-2 lg:col-span-3">
            <label
              htmlFor="pastExperience"
              className="block text-sm font-medium text-gray-600"
            >
              Brief Past Experience
            </label>
            <textarea
              id="pastExperience"
              name="pastExperience"
              value={formData.pastExperience}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Describe past experience"
              rows={3}
              required
            />
          </div>

          {/* Word Limit */}
          <div className="relative">
            <label
              htmlFor="wordLimit"
              className="block text-sm font-medium text-gray-600"
            >
              Word Limit
            </label>
            <input
              type="number"
              id="wordLimit"
              name="wordLimit"
              value={formData.wordLimit}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Enter word limit per point"
              required
            />
          </div>

          {/* Include Metrics */}
          <div className="relative">
            <label
              htmlFor="includeMetrics"
              className="block text-sm font-medium text-gray-600"
            >
              Include Metrics
            </label>
            <select
              id="includeMetrics"
              name="includeMetrics"
              value={formData.includeMetrics}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Bullet Count */}
          <div className="relative">
            <label
              htmlFor="bulletCount"
              className="block text-sm font-medium text-gray-600"
            >
              Bullet Points Count
            </label>
            <input
              type="number"
              id="bulletCount"
              name="bulletCount"
              value={formData.bulletCount}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              placeholder="Enter number of bullet points"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-lg shadow-lg transition duration-300"
        >
          Generate Prompt
        </button>
      </form>

      {/* Generated Points Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mt-6 space-y-4 animate-fadeIn">
        <h3 className="text-xl font-semibold text-gray-800">
          Generated Points
        </h3>
        {generatedPoints.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {generatedPoints.map((point, index) => (
              <li key={index} className="text-gray-700">
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No points generated yet</p>
        )}
      </div>
    </div>
  );
};

export default PromptForm;
