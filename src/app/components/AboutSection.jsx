"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>3DS MAx</li>
        <li>AutoCad</li>
        <li>Intelligence artificielle</li>
        <li>SketchUP</li>
        <li>PHOTOSHOP</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Diplôme baccalauréat | 2021-2022
        <ul className="list-none pl-4">
          <li>Economie et Gestion</li>
        </ul>
        </li>
        <li>
        Licence appliquée en Design | 2022-2024
        <ul className="list-none pl-4">
          <li>École Supérieure des Sciences et Technologies du Design (ESSTED)</li>
        </ul>
        </li>
      </ul>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>...
          <ul className="list-none pl-4">
            <li>...</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "activity",
    id: "activity",
    content: (
      <ul className="list-disc pl-2">
        <li>Vice Précidente ( ROTARACT )
          <ul className="list-none pl-4">
            <li>Assumé le rôle de Vice-Présidente et Responsable de lIntérêt Public au sein du Club Rotaract Carthage Amilcar.</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Scénographe passionnée par la création et linnovation, avec une expérience en conception et réalisation de scénographies pour divers événements, je suis déterminée à apporter ma créativité et mon expertise au sein de projets ambitieux.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("activity")}
              active={tab === "activity"}
            >
              {" "}
              Activity Extra-Univ{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
