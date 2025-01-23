'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function SkillsProficiency() {
      
    const [skills,setSkills] = useState([]); 
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    const fetch =async()=>{
      const result = await axios.get(`${process.env.NEXT_PUBLIC_API}/skill/get`)
      if (result.data.success) {
        const skillsWithColors = result.data.data.map((skill) => ({
          ...skill,
          color: getRandomColor(),
        }));
        setSkills(skillsWithColors); // Correctly access the `data` array
      }
    }
   

    useEffect(()=>{
       fetch()
    },[])
  
    return (
      
        <div className="w-full border-2 rounded-md bg-slate-200 p-3 mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Skills Proficiency</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{skill.skillName}</span>
                  <span className="text-sm text-gray-600">{skill.proficiencyLevel}%</span>
                </div>
                <div className="h-3 w-full bg-gray-300 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.proficiencyLevel}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    );
  }
  