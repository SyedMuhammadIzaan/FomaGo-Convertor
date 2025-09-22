import type React from 'react'
import { Button } from 'antd';
import type {ButtonCompPropsType} from '../type/component.type'

const ButtonComp:React.FC<ButtonCompPropsType> = ({title}) => {
    return (
        <>
            <Button type="primary" size="large" >
                {title}
            </Button>
        </>
    )
}

export default ButtonComp