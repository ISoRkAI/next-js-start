import { socials } from "@/pages/api/data/socials";

export default function handler(req, res) {
  console.log("socialssocials", socials);
  res.status(200).json(socials);
}
