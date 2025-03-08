import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar/Navbar";
import Templates from "./Template/Templates";
import Settings from "./Settings/Settings";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export const templatesCtx = React.createContext();

const App = (props) => {
  const { title } = props;
  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.
  const listItems = [
    {
      icon: <Ribbon24Regular />,
      primaryText: "Achieve more with Office integration",
    },
    {
      icon: <LockOpen24Regular />,
      primaryText: "Unlock features and functionality",
    },
    {
      icon: <DesignIdeas24Regular />,
      primaryText: "Create and visualize like a pro",
    },
  ];

  //
  const [defaultTemplates, setDefaultTemplates] = React.useState({});

  React.useEffect(() => {
    setDefaultTemplates({
      '模版1': {
        name: '模版1',
        fontSize: 20,
        fontColor: 'red',
        fontFamily: 'Times New Roman',
      },
      '模版2': {
        name: '模版2',
        fontSize: 25,
        fontColor: 'green',
        fontFamily: 'Arial',
      },
      '模版3': {
        name: '模版3',
        fontSize: 30,
        fontColor: 'blue',
        fontFamily: 'Times New Roman',
      },
    });
  }, [])

  return (
    <div className={styles.root}>
      <templatesCtx.Provider value={{ defaultTemplates, setDefaultTemplates}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Templates />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </templatesCtx.Provider>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
