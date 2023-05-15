import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <div className='main'>
            <div className='grandient'/>
        </div>

        <main className='app'>
            {children}
        </main>
    </html>
  )
}

export default RootLayout