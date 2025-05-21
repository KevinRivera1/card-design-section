interface CardInfoProps {
    title:string;
    description:string;
    btn_text:string;
    bgClass?:string
    btnClass?:string
}
export const Card = ({title,description,btn_text,bgClass,btnClass}:CardInfoProps) => {
    
    return (
            <article className={`p-10 flex items-start justify-around gap-10 flex-col text-white ${bgClass}`} >
                <figure>

                </figure>
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="description text-balance text-left text-xl">
                    {description}
                </p>
                <button className={`rounded-full px-4 py-2 bg-white font-medium ${btnClass}`}>{btn_text}</button>
            </article>
    )
}