import React from 'react';

export default function Recipes() {
  const recipes = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/6580456/pexels-photo-6580456.jpeg?auto=compress&cs=tinysrgb&w=600',
      meta: 'Fácil | 30min',
      title: 'Brigadeiro Gourmet',
      desc: 'Ingredientes: leite condensado, chocolate belga, manteiga, granulado especial...',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/6580458/pexels-photo-6580458.jpeg?auto=compress&cs=tinysrgb&w=600',
      meta: 'Médio | 1h',
      title: 'Doce de Leite Caseiro',
      desc: 'Aprenda a fazer o tradicional doce de leite de pedra...',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/6580450/pexels-photo-6580450.jpeg?auto=compress&cs=tinysrgb&w=600',
      meta: 'Fácil | 20min',
      title: 'Banana Caramelizada',
      desc: 'Sobremesa simples e sofisticada para ocasiões especiais...',
    },
  ];

  return (
    <div id="receitasPage">
      <div className="page-header">
        <h1>Receitas</h1>
        <p>Aprenda a fazer delícias em casa com o toque Mirahy</p>
      </div>
      <div className="receitas-grid">
        {recipes.map((recipe) => (
          <div className="receita-card fade-up" key={recipe.id}>
            <img src={recipe.img} alt="Receita" />
            <div className="receita-card-content">
              <div className="blog-date">{recipe.meta}</div>
              <h3 className="receita-title">{recipe.title}</h3>
              <p className="blog-excerpt">{recipe.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
