import React from 'react'

export default function About() {
    return (
        <div>
            <h1 className="display-4">About Contacts Manager. You get anything here!</h1>
            <p className='d-flex-p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Recusandae nisi accusamus, ducimus vitae ipsam placeat cumque cupiditate 
                soluta accusantium laudantium doloremque commodi quam eaque, consequuntur 
                expedita exercitationem blanditiis tempora. Et?
            </p>
            <img src="https://picsum.photos/200/300?grayscale" alt="greyPicture" style={{width:'50%', height:'350px'}}/>
            <p className ='d-flex p-2 justify-content-end' >
                <span className='w-50 py-3 d-flex align-items-end'>
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                    'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                </span>
            </p>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="greyPicture" style={{width:'50%', height:'350px'}}/>
            <p className ='d-flex p-2 justify-content-end' >
                <span className='w-50 py-3 d-flex align-items-end'>
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
                    'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                </span>
            </p>
            
        </div>
    )
}
