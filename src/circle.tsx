export const Circle = (props: { width: number, height: number, color: string, children: any}) => {
    return (
        <div style={{
            backgroundColor: props.color,
            borderRadius: 200,
            margin: 30,
            width: props.width,
            height: props.height
        }}>
            <div style={{margin: 140}}>
                {props.children}
            </div>
        </div>
    );
}