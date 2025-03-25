interface Props {
    condition: boolean | undefined,
    children: React.ReactNode,
}

const Maybe = (props: Props) => {
    return (
        <>
            {(props.condition) && (props.condition === true) &&
                props.children
            }
        </>
    )
}

export default Maybe
