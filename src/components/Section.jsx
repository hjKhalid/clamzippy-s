const Section = ({ title, content }) => {
  return (
    <section
      className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      id={title}
      // ref={title}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </section>
  );
};

export default Section;
