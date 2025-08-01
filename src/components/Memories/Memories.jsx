import './Memories.css';

const Memories = () => {
  const memories = [
    {
      id: 1,
      title: 'Our First Meet',
      date: 'July 3, 2022',
      description:
        'The day my life changed forever when I saw you for the first time.',
    },
    {
      id: 2,
      title: 'First Date',
      date: 'July 10, 2022',
      description: 'Coffee turned into dinner, and I knew you were special.',
    },
    {
      id: 3,
      title: 'First Kiss',
      date: 'August 15, 2022',
      description: 'Under the stars, time stood still when our lips met.',
    },
    {
      id: 4,
      title: 'Official',
      date: 'September 1, 2022',
      description:
        'The day we made it official and started this beautiful journey.',
    },
  ];

  return (
    <section className="memories-section">
      <h2>Our Beautiful Journey</h2>
      <div className="timeline">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <h3>{memory.title}</h3>
              <span className="date">{memory.date}</span>
              <p>{memory.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memories;
