const CredentialTestimonial=()=>{
    const data =[{name:"",address:"1mks"},{name:"sss",address:"slmslmldsds"}];
    return(
        <>
        <div className="h-full w-full flex flex-row" style={{height:"100vh"}}>
            {data.map((data,index)=>(
                <>
                    <div key={index} className="bg-blue-gray-500">
                        <div className="relative overflow-hidden cursor-auto aspect-w-1 aspect-h-1 rounded-2xl md:rounded-3xl lg:rounded-4xl">
                            <h3>{data.address}</h3>
                            <div className="rounded w-12 h-12">{data.address}</div>
                        </div>
                    </div>
                </>
            ))}
        </div>
        </>
    )
}
export default CredentialTestimonial