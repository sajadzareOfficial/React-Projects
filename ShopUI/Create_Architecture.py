
from pathlib import Path


# ==========================================
# CONFIGURATION
# ==========================================

ROOT = Path.cwd() / "src"

COMPONENTS = [
    "Header",
    "Main",
    "Footer",
]

DIRECTORIES = [
    "assets/images",
    "assets/icons",

    "constants",
    "hooks",
    "pages",
    "router",
]


# ==========================================
# FILE TEMPLATES
# ==========================================

FILES = {

    "App.jsx": """\
import React from 'react';
import Pages from './pages/pages';

function App() {
    return <Pages />;
}

export default App;
""",

    "main.jsx": """\
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
""",

    "index.css": """\
@import "tailwindcss";
@custom-variant light (&:where(.light, .light *));
@theme{}
@utility flex-center {
  @apply flex items-center justify-center;
}
@utility flex-col-center {
  @apply flex flex-col justify-center items-center;
}
""",

    "constants/constants.jsx": """\
export const APP_NAME = 'My React App';

export const NAVIGATION_ITEMS = [
    'Home',
    'About',
    'Contact',
];
""",

    "hooks/hooks.jsx": """\
import { useState } from 'react';

export function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(prev => !prev);
    };

    return [value, toggle];
}
""",

    "pages/pages.jsx": """\
import React from 'react';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

function Pages() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Pages;
""",

    "router/router.jsx": """\
import React from 'react';
import Pages from '../pages/pages';

const routes = [
    {
        path: '/',
        element: <Pages />,
    },
];

export default routes;
""",

}


# ==========================================
# COMPONENT TEMPLATES
# ==========================================

def get_component_files(component):

    component_path = f"components/{component}"

    return {

        f"{component_path}/{component}.jsx": f"""\
import React from 'react';

import Desktop from './Component/Desktop/Desktop';
import Mobile from './Component/Mobile/Mobile';

function {component}() {{
    return (
        <section className="{component.lower()}">
            <Desktop />
            <Mobile />
        </section>
    );
}}

export default {component};
""",

        f"{component_path}/Component/Desktop/Desktop.jsx": """\
import React from 'react';

function Desktop() {
    return (
        <></>
    );
}

export default Desktop;
""",

        f"{component_path}/Component/Mobile/Mobile.jsx": """\
import React from 'react';

function Mobile() {
    return (
        <></>
    );
}

export default Mobile;
""",

    }


# ==========================================
# CREATE DIRECTORY
# ==========================================

def create_directory(path):

    if path.exists():
        print(f"[EXISTS]  Folder: {path.relative_to(ROOT)}")
        return

    path.mkdir(parents=True, exist_ok=True)

    print(f"[CREATED] Folder: {path.relative_to(ROOT)}")


# ==========================================
# CREATE FILE
# ==========================================

def create_file(file_path, content):

    path = ROOT / file_path

    if path.exists():
        print(f"[SKIPPED] File: {file_path}")
        return

    path.parent.mkdir(parents=True, exist_ok=True)

    path.write_text(content, encoding="utf-8")

    print(f"[CREATED] File: {file_path}")


# ==========================================
# CREATE GENERAL DIRECTORIES
# ==========================================

def create_directories():

    print("\n--- Creating Directories ---\n")

    for directory in DIRECTORIES:

        create_directory(ROOT / directory)


# ==========================================
# CREATE COMPONENT ARCHITECTURE
# ==========================================

def create_components():

    print("\n--- Creating Components ---\n")

    for component in COMPONENTS:

        base = ROOT / "components" / component

        directories = [
            base / "Component" / "Desktop",
            base / "Component" / "Mobile",
        ]

        for directory in directories:

            create_directory(directory)

        files = get_component_files(component)

        for file_path, content in files.items():

            create_file(file_path, content)


# ==========================================
# CREATE GENERAL FILES
# ==========================================

def create_files():

    print("\n--- Creating Files ---\n")

    for file_path, content in FILES.items():

        create_file(file_path, content)


# ==========================================
# MAIN FUNCTION
# ==========================================

def create_architecture():

    print("\n====================================")
    print("      REACT ARCHITECTURE TOOL")
    print("====================================\n")

    ROOT.mkdir(parents=True, exist_ok=True)

    create_directories()

    create_components()

    create_files()

    print("\n====================================")
    print("       ARCHITECTURE COMPLETED")
    print("====================================")

    print(f"\nProject Path: {ROOT.resolve()}")

    print("\nAll Done!")


# ==========================================
# EXECUTION
# ==========================================

if __name__ == "__main__":

    try:
        create_architecture()

    except Exception as error:
        print(f"\n[ERROR] {error}")
