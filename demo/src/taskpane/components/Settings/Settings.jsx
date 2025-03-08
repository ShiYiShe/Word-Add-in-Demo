import React from "react";
import { templatesCtx } from "../App";
import './Settings.css';

const Settings = () => {
  const { defaultTemplates, setDefaultTemplates } = React.useContext(templatesCtx);
  const [newName, setNewName] = React.useState('');
  const [clickedName, setClickedName] = React.useState('模版1');
  const [clickedSettings, setClickedSettings] = React.useState({});

  React.useEffect(() => {
    setClickedSettings({
      ...defaultTemplates[clickedName]
    })
  }, [clickedName]);

  // test
  // React.useEffect(() => {
  //   console.log('clickedSettings:', clickedSettings);
  // }, [clickedSettings]);
  // React.useEffect(() => {
  //   console.log('defaultTemplates', defaultTemplates)
  // }, [defaultTemplates]);

  const saveNewName = () => {
    setDefaultTemplates({
      ...defaultTemplates,
      [newName]: {
        name: newName,
        fontSize: 12,
        fontColor: 'black',
        fontFamily: 'Times New Roman'
      }
    })

    setNewName('');
  };

  const saveSettings = () => {
    setDefaultTemplates({
      ...defaultTemplates,
      [clickedName]: [clickedSettings][0]
    })
  };

  return (
    <div className="settings-container">
      <div className="settings-templates">
        {Object.entries(defaultTemplates).map(([key, value]) => (
          <div className="settings-template-box space" key={key} onClick={() => setClickedName(key)}>
            {value.name}
          </div>
        ))}
        <input placeholder="输入新名字" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <div className="settings-template-box space" style={{fontSize: "12px"}} onClick={saveNewName}>新建模版</div>
      </div>
      <div className="settings">
        <strong>{clickedName}</strong>
        <div className="label">字体</div>
        <input value={clickedSettings.fontFamily}
          onChange={(e) => setClickedSettings({
            ...clickedSettings,
            fontFamily: e.target.value
          })}
        />
        <div className="label">字号</div>
        <input value={clickedSettings.fontSize}
          onChange={(e) => setClickedSettings({
            ...clickedSettings,
            fontSize: Number(e.target.value)
          })}
        />
        <div className="label">颜色</div>
        <input value={clickedSettings.fontColor}
          onChange={(e) => setClickedSettings({
            ...clickedSettings,
            fontColor: e.target.value
          })}
        />
        <div className="save" onClick={saveSettings}>存储</div>
      </div>
    </div>
  )
}

export default Settings;