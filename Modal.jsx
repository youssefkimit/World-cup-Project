import { useState } from "react"


const getCode =(Name,languages)=>{
    const filtered = languages.filter(({language,name})=>
                      name.toLowerCase().startsWith(Name.toLowerCase()))
    return filtered[0].language
  }
const Modal = ({
            setShowModal,
            languages,
            chosenLanguage,
            setChosenLanguage,
            setChosenCode
        })=>{
    const [searchedLanguage,setSearchedLanguage] = useState('')

    const filteredLanguages = languages.filter(({language,name})=>
                    name.toLowerCase().startsWith(searchedLanguage.toLowerCase())
                    )
    const handleChange = (e)=>{
        setSearchedLanguage(e.target.value)
    }
    const handleClick = (e)=>{
        setChosenLanguage(e.target.textContent)
        setChosenCode(getCode(e.target.textContent,languages))
        setShowModal(null)
    }
    return (
        <div className="option-list">
            <div className="search-bar">
                <input value={searchedLanguage} onChange={handleChange}/>
                <div className="close-button" onClick={()=>setShowModal(null)}>
                    <svg
                        focusable="false"
                        xmlns="http://www.W3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="option-container">
                <ul>
                {filteredLanguages?.map(({language,name})=>(
                    <div className="list-item">
                        <div className="icon">
                            {chosenLanguage===name ?  '✓' : '' }
                        </div>
                        <li 
                            key={language}
                            onClick={handleClick}
                            style={{color : chosenLanguage===name ? '#8ab4f8': null}}
                        >
                            {name}
                        </li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Modal