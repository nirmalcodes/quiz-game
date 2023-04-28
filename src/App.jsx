import { useEffect, useState } from 'react';

function App() {

    function setPageTitle(title) {
        document.title = title;
    }

    useEffect(() => {
        setPageTitle('My Page Titles');
    }, []);

    return (
        <>
            <div className="grid h-screen w-full bg-teal-700">
                <div className="mx-auto self-end bg-stone-500 px-6 py-3 lg:w-3/4">
                    <div className="mb-4 rounded-full bg-green-600 px-4 py-2 text-center">
                        quiz
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-full bg-yellow-600 px-4 py-2">
                            A
                        </div>
                        <div className="rounded-full bg-yellow-600 px-4 py-2">
                            B
                        </div>
                        <div className="rounded-full bg-yellow-600 px-4 py-2">
                            C
                        </div>
                        <div className="rounded-full bg-yellow-600 px-4 py-2">
                            D
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
