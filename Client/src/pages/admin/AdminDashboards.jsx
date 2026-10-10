import { useState,useEffect } from "react"
import api from "../../API/axios"

export default function AdminDashboard() {
  const [skills, setSkills] = useState([])
  const [skillName, setSkillName] = useState("")
  const [skillDesc, setSkillDesc] = useState("")
  const [editingSkillId, setEditingSkillId] = useState(null)

  const [projects, setProjects] = useState([])
  const [projectName, setProjectName] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  const [editingProjectId, setEditingProjectId] = useState(null)

  const [errorSkillMsg,seterrorSkillMsg] = useState("")
  const [errorProjectMsg,seterrorProjectMsg] = useState("")


  const fetchSkills = async () => {
    try {
      const res = await api.get("/skillApi/getSkill")
      setSkills(res.data.skills)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSkillSubmit = async () => {
    if (!skillName.trim()|| !skillDesc.trim()) {
      seterrorSkillMsg("please fill in an all fields")
      return
    }
    try {
      seterrorSkillMsg("")
      if (editingSkillId) {
        await api.put(`/skillApi/updateSkill/${editingSkillId}`, { skillName, skillDesc })
        setEditingSkillId(null)
      } else {
        await api.post("/skillApi/addSkill", { skillName, skillDesc })
      }
      setSkillName("")
      setSkillDesc("")
      fetchSkills()
    } catch (err) {
      console.log(err)
    }
  }

  const handleSkillDelete = async (id) => {
    try {
      await api.delete(`/skillApi/deleteSkill/${id}`)
      fetchSkills()
    } catch (err) {
      console.log(err)
    }
  }

  const handleSkillEdit = (skill) => {
    setSkillName(skill.skillName)
    setSkillDesc(skill.skillDesc)
    setEditingSkillId(skill._id)
  }

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projectApi/getProjects")
      setProjects(res.data.projects)
    } catch (err) {
      console.log(err)
    }
  }

  const handleProjectSubmit = async () => {
    if (!projectName.trim() || !projectDesc.trim()) {
      seterrorProjectMsg("please fill in all fields")
      return
    }
    try {
      seterrorProjectMsg("")
      if (editingProjectId) {
        await api.put(`/projectApi/updateProjects/${editingProjectId}`, { projectName, projectDesc })
        setEditingProjectId(null)
      } else {
        await api.post("/projectApi/addProject", { projectName, projectDesc })
      }
      setProjectName("")
      setProjectDesc("")
      fetchProjects()
    } catch (err) {
      console.log(err)
    }
  }

  const handleProjectDelete = async (id) => {
    try {
      await api.delete(`/projectApi/deleteProject/${id}`)
      fetchProjects()
    } catch (err) {
      console.log(err)
    }
  }

  const handleProjectEdit = (project) => {
    setProjectName(project.projectName)
    setProjectDesc(project.projectDesc)
    setEditingProjectId(project._id)
  }

  const renderDescription = (text) => {
    if (!text) return null
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = text.split(urlRegex)
    return parts.map((part, index) => {
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all block mt-1"
          >
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  useEffect(() => {
    fetchSkills()
    fetchProjects()
  }, [])

  return (
    <section className="px-8 py-10">
      <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded mb-6 text-sm">
  ⚠️ You won't be able to perform any action (add, edit, delete) unless you are logged in as an admin.
</div>
      <h1 className="text-3xl font-serif font-bold border-l-4 border-red-600 pl-4 mb-8">
        Dashboard - Skills
      </h1>

      <div className="bg-gray-50 p-8 rounded mb-6">
        <h2 className="font-bold mb-4">{editingSkillId ? "Edit Skill" : "Add Skill"}</h2>
        {errorSkillMsg && (
          <div className="bg-red-100 text-red-700 px-4 rounded mb-4 text-sm">{errorSkillMsg}</div>
        )}
        <input
          type="text"
          placeholder="Skill Name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
        />
        <input
          type="text"
          placeholder="Skill Description"
          value={skillDesc}
          onChange={(e) => setSkillDesc(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
        />
        <button
          onClick={handleSkillSubmit}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          {editingSkillId ? "Update" : "Add"}
        </button>
      </div>

      <table className="w-full text-left mb-10">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill._id} className="border-b">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{skill.skillName}</td>
              <td className="px-4 py-3">{skill.skillDesc}</td>
              <td className="px-4 py-3">
                <button onClick={() => handleSkillEdit(skill)} className="text-blue-600 hover:underline mr-3">
                  Edit
                </button>
                <button onClick={() => handleSkillDelete(skill._id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-3xl font-serif font-bold border-l-4 border-red-600 pl-4 mb-8">
        Dashboard - Projects
      </h1>

      <div className="bg-gray-50 p-8 rounded mb-6">
        <h2 className="font-bold mb-4">{editingProjectId ? "Edit Project" : "Add Project"}</h2>
        {errorProjectMsg && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          {errorProjectMsg}
        </div>
        )}
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
        />
        <input
          type="text"
          placeholder="Project Description"
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
        />
        <button
          onClick={handleProjectSubmit}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          {editingProjectId ? "Update" : "Add"}
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id} className="border-b">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{project.projectName}</td>
              <td className="px-4 py-3">{renderDescription(project.projectDesc)}</td>
              <td className="px-4 py-3">
                <button onClick={() => handleProjectEdit(project)} className="text-blue-600 hover:underline mr-3">
                  Edit
                </button>
                <button onClick={() => handleProjectDelete(project._id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}