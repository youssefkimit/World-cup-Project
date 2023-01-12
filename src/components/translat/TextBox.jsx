import SelectDropDown from './SelectDropDown'

const TextBox = ({
            style,
            selectedLanguage,
            setShowModal,
            textToTranslate,
            setTextToTranslate,
            setTranslatedText,
            translatedText
        })=>{
    const handleClick = ()=>{
        setTextToTranslate('')
        setTranslatedText('')
    }
    return (
        <div className={style}>
            <SelectDropDown 
                style={style}
                selectedLanguage = {selectedLanguage}
                setShowModal ={setShowModal}
            />
            <textarea className='textarea'
                placeholder={style==='input' ? 'Enter Text': 'Translation'}
                disabled={style==='output'}
                onChange={(e)=>setTextToTranslate(e.target.value)}
                value={ style==='input' ? textToTranslate:translatedText}
            />
            {style==='input' && 
            <div className='delete a' onClick={handleClick}> ˟</div>
            }
        </div>
    )
}

export default TextBox