export type Testimonial = {
  id: string;
  rating?: number;
  clientName: string;
  position?: string;
  company?: string;
  comment: string;
  linkedinUrl?: string;
  date?: string;
  source?: "Upwork" | "LinkedIn";
  projectTitle?: string;
  tags?: string[];
};

/**
 * Static testimonials for now.
 * Later this can be replaced with a database/API fetch that returns Testimonial[].
 */
export const testimonials: Testimonial[] = [
  {
    id: "andy-platform-qa",
    rating: 5,
    clientName: "Andy H.",
    position: "Client",
    company: "Platform QA testing",
    projectTitle: "Platform QA testing",
    comment:
      "Masfiqur did a great job of thoroughly testing a new platform and recommending numerous UX and overall improvements. I would highly recommend and look forward to working with him again!",
    date: "Apr 18, 2022",
    source: "Upwork",
    tags: ["Detail Oriented", "Collaborative"],
  },
  {
    id: "workflow-platform",
    rating: 5,
    clientName: "Upwork Client",
    position: "Client",
    company: "Workflow management platform",
    projectTitle: "Quality assurance testing for a workflow management platform",
    comment:
      "Masfiqur did a great job of proactively and diligently testing our new platform. His communication was clear and thorough with an eye for detail. Highly recommended and a pleasure working with him!",
    date: "Dec 15, 2021",
    source: "Upwork",
    tags: ["Clear Communicator"],
  },
  {
    id: "mobile-web-tester",
    rating: 5,
    clientName: "Upwork Client",
    position: "Client",
    company: "Mobile & Web product",
    projectTitle: "Mobile App and Web Tester",
    comment: "Highly recommended. One of the best and trusted client i ever worked with.",
    date: "Apr 21, 2022",
    source: "Upwork",
  },
  {
    id: "grant-espanet",
    clientName: "Grant Espanet",
    position: "Fractional CTO · Mobile / Full Stack",
    company: "Engineering collaborator",
    comment:
      "Whenever a developer created a pull request, Masfiqur was responsible for testing it. Masfiqur always found ways to improve each pull request, whether it be UX suggestions, UI changes, or bug detection. Masfiqur is very familiar with testing on iOS, Android, front end, and back end.",
    date: "Mar 1, 2020",
    source: "LinkedIn",
  },
  {
    id: "rafael-hurpia",
    clientName: "Rafael Hurpia da Rocha",
    position: "Full-Stack and DevOps Engineer",
    company: "Same team collaborator",
    comment:
      "He is a very nice person to work with. For QA, he is very careful with the requirements and features that we don't detect when coding. And also very interested in learning more to be even more helpful for the team.",
    date: "Feb 18, 2020",
    source: "LinkedIn",
  },
  {
    id: "gareth-ridout",
    clientName: "Gareth Ridout",
    position: "Project Support Specialist",
    company: "The SilverLogic",
    comment:
      "Talented, imaginative, hardworking, persistent, and efficient. Despite being separated by thousands of miles and several time zones, Masfiqur's ability to fully test, accurately describe his findings, and make insightful recommendations make him an incredibly valuable member of our team. Comes with my full recommendation.",
    date: "May 24, 2018",
    source: "LinkedIn",
  },
];

export async function getTestimonials(): Promise<Testimonial[]> {
  // Future: replace with database/API call
  // return await db.testimonial.findMany({ orderBy: { date: "desc" } });
  return testimonials;
}
