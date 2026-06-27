import React, { useState } from 'react';
import { SimpleGrid, Button, Wrap, WrapItem } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

export default function Portfolio({ data }) {
  const { projects = [], defaultCategory = 'All', categories = [] } = data || {};

  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory));

  return (
    <section id="portfolio" className="section">
      <div className="section-title-wrap">
        <h2 className="section-title">Portfolio</h2>
      </div>
      <p className="section-subtitle">University &amp; personal projects</p>

      <Wrap spacing={2} mb={8} justify="center">
        {categories.map(cat => (
          <WrapItem key={cat}>
            <Button
              size="sm"
              variant={activeCategory === cat ? 'solid' : 'outline'}
              colorScheme="orange"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          </WrapItem>
        ))}
      </Wrap>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {filtered.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </SimpleGrid>
    </section>
  );
}
