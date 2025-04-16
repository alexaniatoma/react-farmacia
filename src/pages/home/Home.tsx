function Home() {
    return (
        <>
        <div className="bg-gray-200 text-green text-xl font-bold">
            <div style={{
                width: "80vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                boxSizing: "border-box",
             
            }}>
               
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "80vw",
                    gap: "2rem"
                }}>
                
                    <div style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img 
                            src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586"
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>

                    <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }}>
                        <h2>Seja Bem Vindo!</h2>
                        <p>Cuidar da sua saúde é a nossa prioridade. Aqui, você encontra confiança, qualidade e bem-estar em cada detalhe.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
