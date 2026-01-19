import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Department from "./components/Department/Department";
import departments from "./data/departments";
import './App.css'

function App() {

  return (
    <>
      <Header />

      <main>
        {departments.map((dept, index) => (
          <Department key={index} dept={dept} />
        ))}
      </main>

      <Footer />
    </>
  )
}

export default App
