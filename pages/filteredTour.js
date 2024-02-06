import Image from "next/image";
import Fuse from "fuse.js";
import { useState } from "react";
import Card from "@/components/Card";

export default function FilteredTour({
  ideas,
  onToggleFavourites,
  favouriteIdeas,
}) {
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedForms, setSelectedForms] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [filteredIdeas, setFilteredIdeas] = useState([]);

  const fuse = new Fuse(ideas, {
    keys: ["hashtags"],
    minMatchCharLength: 3,
    threshold: 0.0,
  });

  const handleMaterialButtonClick = (material) => {
    if (!selectedMaterials.includes(material)) {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  const handleFormButtonClick = (form) => {
    if (!selectedForms.includes(form)) {
      setSelectedForms([...selectedForms, form]);
    }
  };
  const handleDifficultyButtonClick = (form) => {
    if (!selectedDifficulties.includes(form)) {
      setSelectedDifficulties([...selectedDifficulties, form]);
    }
  };

  const searchMaterials = () => {
    const filteredIdeas = ideas.filter((idea) => {
      return (
        idea.hashtags.some((tag) => selectedMaterials.includes(tag)) &&
        idea.hashtags.some((tag) => selectedForms.includes(tag)) &&
        idea.hashtags.some((tag) => selectedDifficulties.includes(tag))
      );
    });
    setFilteredIdeas(filteredIdeas);
  };

  console.log(selectedMaterials);

  return (
    <>
      <section>
        <h2>Material</h2>
        <button onClick={() => handleMaterialButtonClick("wood")}>
          <Image
            src="https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="wood"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleMaterialButtonClick("plastic")}>
          <Image
            src="https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="plastic"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleMaterialButtonClick("cardboard")}>
          <Image
            src="https://images.unsplash.com/photo-1624137527136-66e631bdaa0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cardboard"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleMaterialButtonClick("glass")}>
          <Image
            src="https://images.unsplash.com/photo-1542661206-03e9001692de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="glass"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleMaterialButtonClick("metal")}>
          <Image
            src="https://images.unsplash.com/photo-1597227093570-eccc70d8a416?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="glass"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleMaterialButtonClick("paper")}>
          <Image
            src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=2630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="glass"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleMaterialButtonClick("textile")}>
          <Image
            src="https://images.unsplash.com/photo-1534639077088-d702bcf685e7?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="glass"
            width={100}
            height={100}
          />
        </button>
      </section>

      <section>
        <h2>Form</h2>
        <button onClick={() => handleFormButtonClick("bottle")}>
          <Image
            src="https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bottle"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleFormButtonClick("cup")}>
          <Image
            src="https://images.unsplash.com/photo-1575026469075-99e9e3433e72?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cup"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleFormButtonClick("can")}>
          <Image
            src="https://images.unsplash.com/photo-1561924018-4f213bdc7364?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="can"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleFormButtonClick("bag")}>
          <Image
            src="https://images.unsplash.com/photo-1597348989645-46b190ce4918?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bag"
            width={100}
            height={100}
          />
        </button>
      </section>
      <section>
        <h2>Difficulty</h2>
        <button onClick={() => handleDifficultyButtonClick("easy")}>
          <Image
            src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="easy"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleDifficultyButtonClick("medium")}>
          <Image
            src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="medium"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleDifficultyButtonClick("difficult")}>
          <Image
            src="https://images.unsplash.com/photo-1544914379-806667cd9489?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="difficult"
            width={100}
            height={100}
          />
        </button>
        <button onClick={() => handleDifficultyButtonClick("profi")}>
          <Image
            src="https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profi"
            width={100}
            height={100}
          />
        </button>
      </section>

      <button onClick={searchMaterials}>Results</button>

      {filteredIdeas.length > 0 && (
        <Card
          image={filteredIdeas[0].image}
          cover={filteredIdeas[0].cover}
          title={filteredIdeas[0].title}
          hashtags={filteredIdeas[0].hashtags}
          onToggleFavourites={onToggleFavourites}
          favouriteIdeas={favouriteIdeas}
          id={ideas[0]._id}
        />
      )}
    </>
  );
}
