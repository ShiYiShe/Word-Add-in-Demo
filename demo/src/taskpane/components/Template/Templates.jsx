import React from "react";
import { templatesCtx } from "../App";
import './Template.css';

const Templates = () => {
  const { defaultTemplates } = React.useContext(templatesCtx);

  const applyTemplate = async (templateId) => {
    await Word.run(async (context) => {

    const selection = context.document.getSelection();

    selection.font.color = defaultTemplates[templateId].fontColor;
    selection.font.size = defaultTemplates[templateId].fontSize;
    selection.font.name = defaultTemplates[templateId].fontFamily;

    await context.sync();
  });
  };

  return (
    <div className="templates-container">
      {Object.entries(defaultTemplates).map(([key, value]) => (
        <div className="template-box" key={key} onClick={() => applyTemplate(key)}>
          {value.name}
        </div>
      ))}
    </div>
  )
}

export default Templates;