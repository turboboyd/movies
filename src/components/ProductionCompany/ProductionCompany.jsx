import React from 'react';

export default function ProductionCompany({ company }) {
  return (
    <li key={company.id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
        alt={company.name}
      />
    </li>
  );
}
