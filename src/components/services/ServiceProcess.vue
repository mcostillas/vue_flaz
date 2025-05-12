<template>
  <section class="service-process">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">OUR PROCESS</span>
        <h2>How We Work</h2>
        <p>Our streamlined process ensures efficient service delivery and exceptional results for every project.</p>
      </div>
      
      <div class="process-steps">
        <div class="process-step" v-for="(step, index) in processSteps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceProcess',
  data() {
    return {
      processSteps: [
        {
          title: 'Initial Consultation',
          description: 'We begin with a thorough consultation to understand your specific requirements, challenges, and objectives.'
        },
        {
          title: 'Site Assessment',
          description: 'Our technical team conducts a comprehensive site assessment to evaluate the scope of work and identify potential challenges.'
        },
        {
          title: 'Detailed Proposal',
          description: 'Based on our assessment, we provide a detailed proposal outlining the scope of work, timeline, and cost estimates.'
        },
        {
          title: 'Project Execution',
          description: 'Upon approval, our skilled professionals execute the project with precision, adhering to the highest quality standards.'
        },
        {
          title: 'Quality Inspection',
          description: 'We conduct thorough quality inspections throughout the project to ensure all work meets our exacting standards.'
        },
        {
          title: 'Project Handover',
          description: 'Upon completion, we provide a comprehensive handover, including documentation and guidance on maintenance.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-process {
  padding: 100px 0;
  background-color: var(--light-gray);
}

.section-header {
  margin-bottom: 50px;
}

.section-subtitle {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.section-header h2 {
  margin-bottom: 15px;
}

.section-header p {
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
}

.process-steps {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25px;
  width: 2px;
  background-color: var(--primary-blue);
}

.process-step {
  display: flex;
  margin-bottom: 50px;
  position: relative;
}

.process-step:last-child {
  margin-bottom: 0;
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 30px;
  position: relative;
  z-index: 1;
}

.step-content {
  flex: 1;
  padding-top: 5px;
}

.step-content h3 {
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: var(--primary-blue);
}

.step-content p {
  color: var(--text-light);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .service-process {
    padding: 60px 0;
  }
  
  .process-steps::before {
    left: 20px;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin-right: 20px;
  }
}
</style>
