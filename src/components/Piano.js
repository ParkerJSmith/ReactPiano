import Key from './Key'

const Piano = () => {
    return (
        <div className='piano-container'>
            <div className='piano'>
                <Key tone='c'/>
                <Key tone='c#'/>
                <Key tone='d'/>
                <Key tone='d#'/>
                <Key tone='e'/>
                <Key tone='f'/>
                <Key tone='f#'/>
                <Key tone='g'/>
                <Key tone='g#'/>
                <Key tone='a'/>
                <Key tone='a#'/>
                <Key tone='b'/>
            </div>
        </div>
    )
}

export default Piano
