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
    id: "andy-planet-price",
    rating: 5,
    clientName: "Andy H.",
    position: "Founder",
    company: "Planet Price",
    projectTitle: "Platform QA testing",
    comment:
      "Masfiqur did a great job of thoroughly testing a new platform and recommending numerous UX and overall improvements. I would highly recommend and look forward to working with him again!",
    date: "Apr 18, 2022",
    source: "Upwork",
    tags: ["Detail Oriented", "Collaborative"],
  },
  {
    id: "andrew-sjahadi",
    rating: 5,
    clientName: "Andrew Sjahadi",
    position: "Client",
    company: "Upwork",
    projectTitle: "Mobile App and Web Tester",
    comment:
      "Highly recommended. One of the best and most trusted people I have ever worked with.",
    date: "Apr 21, 2022",
    source: "Upwork",
    tags: ["Mobile App QA", "Web QA"],
  },
  {
    id: "phillip-bruner-workflow",
    rating: 5,
    clientName: "Phillip Bruner, PhD",
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
    id: "rodrigo-souza",
    clientName: "Rodrigo Souza",
    position: "Delivery Lead | QA Engineering Leader",
    company: "World Sport Action",
    comment:
      "I had the pleasure of managing Masfiqur at World Sport Action, and he was a reliable and valuable member of our QA team. He consistently approached his work with care, professionalism and strong attention to detail. Masfiqur was always willing to investigate issues thoroughly, collaborate with developers and other team members, and help ensure we delivered a quality product to our users. Beyond his technical contribution, he was respectful, dependable and easy to work with. I truly appreciated his commitment and positive attitude, and I would confidently recommend him to any team looking for a dedicated Quality Assurance professional.",
    date: "Aug 25, 2026",
    source: "LinkedIn",
    tags: ["Attention to Detail", "Collaborative", "Reliable"],
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
