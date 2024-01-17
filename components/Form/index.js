import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledUnorderedList = styled.ul`
  margin-left: 1rem;
  list-style: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.button`
  flex: 1;
`;

export default function Form({ idea = {}, onSubmit }) {
  const [instructions, setInstructions] = useState(
    idea.instructions ? idea.instructions : [{ id: uuidv4(), value: "" }]
  );
  const router = useRouter();

  function handleInstructionChange(id, value) {
    const newInstructions = instructions.map((instruction) =>
      instruction.id === id ? { ...instruction, step: value } : instruction
    );
    setInstructions(newInstructions);
  }

  function handleAddInstruction() {
    const newInstruction = { id: uuidv4(), step: "" };
    setInstructions([...instructions, newInstruction]);
  }

  function handleRemoveInstruction(id) {
    const newInstructions = instructions.filter(
      (instruction) => instruction.id !== id
    );
    setInstructions(newInstructions);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    data.items = data.items.split(",").map((item) => item.trim());
    data.hashtags = data.hashtags.split(",").map((item) => item.trim());

    data.instructions = instructions
      .filter(
        (instruction) =>
          typeof instruction.step === "string" && instruction.step.trim() !== ""
      )
      .map((instruction, index) => ({
        id: `${data.id}.${index + 1}`,
        step: instruction.step.trim(),
      }));

    // onSubmit(data);
    onSubmit({ ...idea, ...data });
    window.alert("Your new idea has been added!");
    const form = event.target.elements;
    event.target.reset();
    form.title.focus();
    router.push("/");
  }

  function handleCancel() {
    const isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) {
      router.push("/");
    }
  }

  // const ideaWithDefaults = {
  //   title: "",
  //   image: "",
  //   items: "",
  //   instructions: [],
  //   hashtags: "",
  //
  // };
  console.log(instructions);
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">title:</label>
        <input id="title" name="title" defaultValue={idea.title} />
        <label htmlFor="image">image url:</label>
        <input id="image" name="image" defaultValue={idea.image} />
        <label htmlFor="items">items:</label>
        <input
          id="items"
          name="items"
          placeholder="item, item, item"
          defaultValue={idea.items}
        />
        <label htmlFor="instructions">instructions:</label>

        {instructions.map((instruction, index) => (
          <div key={instruction.id}>
            <StyledUnorderedList>
              <li>
                <span>{index + 1}. </span>
                <input
                  type="text"
                  value={instruction.step || ""}
                  onChange={(e) =>
                    handleInstructionChange(instruction.id, e.target.value)
                  }
                />
                <button type="button" onClick={() => handleAddInstruction()}>
                  +
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveInstruction(instruction.id)}
                >
                  x
                </button>
              </li>
            </StyledUnorderedList>
          </div>
        ))}
        <label htmlFor="hashtags">hashtags:</label>
        <input
          id="hastags"
          name="hashtags"
          placeholder="hashtag, hashtag, hashtag"
          defaultValue={idea.hashtags}
        />
        <ButtonContainer>
          <StyledButton>add</StyledButton>
        </ButtonContainer>
      </StyledForm>
      <ButtonContainer>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </ButtonContainer>
    </>
  );
}