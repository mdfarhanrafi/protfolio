import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatsCards from '@/components/stateCard';
import SkillsProficiency from '@/components/skills';
import RecentProjects from '@/components/recentProject';
import Header from '@/components/header';
const Dashboard = () => {
  const skills = [
    { name: "React.js", proficiency: 90, color: "bg-blue-500" },
    { name: "Node.js", proficiency: 85, color: "bg-green-500" },
    { name: "TypeScript", proficiency: 80, color: "bg-purple-500" }
  ];

  const stats = [
    { title: "Total Projects", value: "12" },
    { title: "Skills", value: "8" },
    { title: "Completed", value: "10" }
  ];

  return (
    <div>
      <Header/>
      <StatsCards/>
      <SkillsProficiency/>
      <RecentProjects/>
    </div>
  );
};

export default Dashboard;