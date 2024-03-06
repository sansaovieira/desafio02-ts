import { Button } from "@chakra-ui/react";

interface BtnProps {
    title: string,
    handleClick: (name: string) => void
}
export const Btn = ({title, handleClick}: BtnProps) => {
    return (
        <div>
            <Button onClick={() => handleClick('Sansão')} colorScheme='teal' size='lg' width='100%' marginTop='5px'>
                {title}
            </Button>
        </div>
    )
}

