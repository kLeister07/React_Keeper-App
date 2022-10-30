import React from 'react'
import Note from './Note';

const notes = [
    {
        key: 1,
        title: 'Delegation',
        content:
            'Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem',
    },
    {
        key: 2,
        title: 'Loops',
        content:
            'How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.',
    },
    {
        key: 3,
        title: 'Arrays',
        content:
            "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
    },
    {
        key: 4,
        title: 'Hardware vs. Software',
        content:
            "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
    },
    {
        key: 5,
        title: 'How To Get Rich Quick',
        content: 'Follow the rich white man.',
    },
    {
        key: 6,
        title: 'Always Remember',
        content: 'You ARE Superman!',
    },
    {
        key: 7,
        title: 'The North Remembers',
        content: 'You know nothing Jon Snow.',
    },
];

const Notes = () => {
  return (
      <>
          {notes.map((notes) => <Note key={notes.key} {...notes} />)}
      </>
  )
}

export default Notes