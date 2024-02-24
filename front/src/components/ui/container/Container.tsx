import {FC} from 'react'
import IChildren from '../../../types/children.interface'

export const Container: FC<IChildren> = (props) => {
    
    return (
        <div className="container">
            {props.children}
        </div>
    )
}