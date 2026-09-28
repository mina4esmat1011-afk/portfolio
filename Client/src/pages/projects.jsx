import { useState, useEffect } from "react"
import api from "../API/axios"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projectApi/getProjects")
        setProjects(res.data.projects)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section className="px-8 py-10">
      <h1 className="text-3xl font-serif font-bold border-l-4 border-red-600 pl-4 mb-8">
        Projects
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-400">No projects added yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="font-bold text-lg mb-1">{project.projectName}</h3>
              <p className="text-gray-600 text-sm">{project.projectDesc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}