import { useState, useEffect } from "react"
import api from "../API/axios"

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get("/skillApi/getSkill")
        setSkills(res.data.skills)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchSkills()
  }, [])

  return (
    <section className="px-8 py-10">
      <h1 className="text-3xl font-serif font-bold border-l-4 border-red-600 pl-4 mb-8">
        Skills
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : skills.length === 0 ? (
        <p className="text-gray-400">No skills added yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="font-bold text-lg mb-1">{skill.skillName}</h3>
              <p className="text-gray-600 text-sm">{skill.skillDesc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}