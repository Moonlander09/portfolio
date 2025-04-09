function SectionHeader({eyebrow,title,description}) {
    return (
        <>
         <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#732e10] to-[#1b6390] text-transparent bg-clip-text text-center">
            {eyebrow}
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl text-center mt-6">
          {title}
        </h2>
        <p className="text-center mt-4 md:text-lg max-w-lg mx-auto text-[var(--text)]/65">
          {description}
        </p>   
        </>
    )
}

export default SectionHeader
