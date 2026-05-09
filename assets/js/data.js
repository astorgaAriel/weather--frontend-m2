// =====================================================
// Datos de ciudades y clima por región
// =====================================================

const regionesData = {
  CLAP: {
    nombre: "Arica y Parinacota",
    ciudades: [
      {
        nombre: "Arica",
        condicion: "Soleado",
        temp: 24,
        viento: 18,
        humedad: 55,
        icono: "Soliado.png"
      },
      {
        nombre: "Putre",
        condicion: "Parcialmente Nublado",
        temp: 12,
        viento: 22,
        humedad: 48,
        icono: "ParcialNublado.png"
      },
      {
        nombre: "Visviri",
        condicion: "Nublado",
        temp: 8,
        viento: 25,
        humedad: 60,
        icono: "Nublado.png"
      },
      {
        nombre: "Camarones",
        condicion: "Soleado",
        temp: 22,
        viento: 16,
        humedad: 52,
        icono: "Soliado.png"
      },
      {
        nombre: "General Lagos",
        condicion: "Parcialmente Nublado",
        temp: 10,
        viento: 20,
        humedad: 58,
        icono: "ParcialNublado.png"
      },
      {
        nombre: "Codpa",
        condicion: "Soleado",
        temp: 26,
        viento: 14,
        humedad: 45,
        icono: "Soliado.png"
      },
      {
        nombre: "Socoroma",
        condicion: "Soleado",
        temp: 20,
        viento: 15,
        humedad: 50,
        icono: "Soliado.png"
      },
      {
        nombre: "Huara",
        condicion: "Parcialmente Nublado",
        temp: 19,
        viento: 17,
        humedad: 52,
        icono: "ParcialNublado.png"
      },
      {
        nombre: "Lluta",
        condicion: "Soleado",
        temp: 23,
        viento: 16,
        humedad: 54,
        icono: "Soliado.png"
      }
    ]
  },
  CLTA: {
    nombre: "Tarapacá",
    ciudades: [
      {
        nombre: "Iquique",
        condicion: "Soleado",
        temp: 22,
        viento: 15,
        humedad: 62,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pica",
        condicion: "Soleado",
        temp: 28,
        viento: 12,
        humedad: 35,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":30,"icono":"Soliado.png"},{"dia":"Mar","tempMax":29,"icono":"Soliado.png"},{"dia":"Mie","tempMax":28,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":27,"icono":"Nublado.png"},{"dia":"Vier","tempMax":26,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":28,"icono":"Soliado.png"}]
      },
      {
        nombre: "Alto Hospicio",
        condicion: "Parcialmente Nublado",
        temp: 20,
        viento: 20,
        humedad: 58,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Camiña",
        condicion: "Soleado",
        temp: 25,
        viento: 14,
        humedad: 40,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":27,"icono":"Soliado.png"},{"dia":"Mar","tempMax":26,"icono":"Soliado.png"},{"dia":"Mie","tempMax":25,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":24,"icono":"Nublado.png"},{"dia":"Vier","tempMax":23,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":25,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pozo Almonte",
        condicion: "Soleado",
        temp: 24,
        viento: 16,
        humedad: 38,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Huara",
        condicion: "Nublado",
        temp: 18,
        viento: 19,
        humedad: 52,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":20,"icono":"Soliado.png"},{"dia":"Mar","tempMax":19,"icono":"Soliado.png"},{"dia":"Mie","tempMax":18,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":17,"icono":"Nublado.png"},{"dia":"Vier","tempMax":16,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":18,"icono":"Soliado.png"}]
      },
      {
        nombre: "Colchane",
        condicion: "Parcialmente Nublado",
        temp: 16,
        viento: 21,
        humedad: 48,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Mamiña",
        condicion: "Soleado",
        temp: 27,
        viento: 13,
        humedad: 36,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":29,"icono":"Soliado.png"},{"dia":"Mar","tempMax":28,"icono":"Soliado.png"},{"dia":"Mie","tempMax":27,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":26,"icono":"Nublado.png"},{"dia":"Vier","tempMax":25,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":27,"icono":"Soliado.png"}]
      },
      {
        nombre: "Matilla",
        condicion: "Nublado",
        temp: 17,
        viento: 20,
        humedad: 50,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":19,"icono":"Soliado.png"},{"dia":"Mar","tempMax":18,"icono":"Soliado.png"},{"dia":"Mie","tempMax":17,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":16,"icono":"Nublado.png"},{"dia":"Vier","tempMax":15,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":17,"icono":"Soliado.png"}]
      }
    ]
  },
  CLAN: {
    nombre: "Antofagasta",
    ciudades: [
      {
        nombre: "Antofagasta",
        condicion: "Soleado",
        temp: 20,
        viento: 16,
        humedad: 70,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Calama",
        condicion: "Soleado",
        temp: 26,
        viento: 10,
        humedad: 25,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":28,"icono":"Soliado.png"},{"dia":"Mar","tempMax":27,"icono":"Soliado.png"},{"dia":"Mie","tempMax":26,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":25,"icono":"Nublado.png"},{"dia":"Vier","tempMax":24,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":26,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Pedro de Atacama",
        condicion: "Soleado",
        temp: 18,
        viento: 28,
        humedad: 20,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":20,"icono":"Soliado.png"},{"dia":"Mar","tempMax":19,"icono":"Soliado.png"},{"dia":"Mie","tempMax":18,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":17,"icono":"Nublado.png"},{"dia":"Vier","tempMax":16,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":18,"icono":"Soliado.png"}]
      },
      {
        nombre: "Tocopilla",
        condicion: "Nublado",
        temp: 19,
        viento: 20,
        humedad: 68,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      },
      {
        nombre: "Mejillones",
        condicion: "Soleado",
        temp: 21,
        viento: 18,
        humedad: 72,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Socaire",
        condicion: "Soleado",
        temp: 16,
        viento: 22,
        humedad: 35,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Sierra Gorda",
        condicion: "Parcialmente Nublado",
        temp: 22,
        viento: 14,
        humedad: 32,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "María Elena",
        condicion: "Soleado",
        temp: 24,
        viento: 12,
        humedad: 28,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Taltal",
        condicion: "Parcialmente Nublado",
        temp: 19,
        viento: 19,
        humedad: 65,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      }
    ]
  },
  CLAT: {
    nombre: "Atacama",
    ciudades: [
      {
        nombre: "Copiapó",
        condicion: "Soleado",
        temp: 25,
        viento: 14,
        humedad: 40,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":27,"icono":"Soliado.png"},{"dia":"Mar","tempMax":26,"icono":"Soliado.png"},{"dia":"Mie","tempMax":25,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":24,"icono":"Nublado.png"},{"dia":"Vier","tempMax":23,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":25,"icono":"Soliado.png"}]
      },
      {
        nombre: "La Serena",
        condicion: "Soleado",
        temp: 22,
        viento: 18,
        humedad: 65,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Vallenar",
        condicion: "Parcialmente Nublado",
        temp: 23,
        viento: 16,
        humedad: 45,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "Caldera",
        condicion: "Soleado",
        temp: 24,
        viento: 15,
        humedad: 62,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Chañaral",
        condicion: "Nublado",
        temp: 21,
        viento: 17,
        humedad: 58,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Freirina",
        condicion: "Parcialmente Nublado",
        temp: 20,
        viento: 14,
        humedad: 50,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Huasco",
        condicion: "Soleado",
        temp: 19,
        viento: 16,
        humedad: 60,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      },
      {
        nombre: "Alto del Carmen",
        condicion: "Soleado",
        temp: 21,
        viento: 13,
        humedad: 44,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Tierra Amarilla",
        condicion: "Parcialmente Nublado",
        temp: 23,
        viento: 15,
        humedad: 48,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      }
    ]
  },
  CLCO: {
    nombre: "Coquimbo",
    ciudades: [
      {
        nombre: "La Serena",
        condicion: "Soleado",
        temp: 22,
        viento: 18,
        humedad: 68,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Coquimbo",
        condicion: "Soleado",
        temp: 21,
        viento: 20,
        humedad: 72,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Ovalle",
        condicion: "Parcialmente Nublado",
        temp: 24,
        viento: 15,
        humedad: 50,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Andacollo",
        condicion: "Soleado",
        temp: 23,
        viento: 16,
        humedad: 55,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "Vicuña",
        condicion: "Soleado",
        temp: 25,
        viento: 12,
        humedad: 45,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":27,"icono":"Soliado.png"},{"dia":"Mar","tempMax":26,"icono":"Soliado.png"},{"dia":"Mie","tempMax":25,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":24,"icono":"Nublado.png"},{"dia":"Vier","tempMax":23,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":25,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pisco Elqui",
        condicion: "Nublado",
        temp: 20,
        viento: 18,
        humedad: 60,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Elqui",
        condicion: "Soleado",
        temp: 23,
        viento: 17,
        humedad: 58,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "Monte Patria",
        condicion: "Parcialmente Nublado",
        temp: 22,
        viento: 14,
        humedad: 52,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Combarbalá",
        condicion: "Soleado",
        temp: 26,
        viento: 13,
        humedad: 42,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":28,"icono":"Soliado.png"},{"dia":"Mar","tempMax":27,"icono":"Soliado.png"},{"dia":"Mie","tempMax":26,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":25,"icono":"Nublado.png"},{"dia":"Vier","tempMax":24,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":26,"icono":"Soliado.png"}]
      }
    ]
  },
  CLVS: {
    nombre: "Valparaíso",
    ciudades: [
      {
        nombre: "Valparaíso",
        condicion: "Parcialmente Nublado",
        temp: 18,
        viento: 22,
        humedad: 75,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":20,"icono":"Soliado.png"},{"dia":"Mar","tempMax":19,"icono":"Soliado.png"},{"dia":"Mie","tempMax":18,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":17,"icono":"Nublado.png"},{"dia":"Vier","tempMax":16,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":18,"icono":"Soliado.png"}]
      },
      {
        nombre: "Viña del Mar",
        condicion: "Soleado",
        temp: 20,
        viento: 20,
        humedad: 70,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Quilpué",
        condicion: "Nublado",
        temp: 16,
        viento: 18,
        humedad: 80,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Concón",
        condicion: "Parcialmente Nublado",
        temp: 19,
        viento: 21,
        humedad: 72,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      },
      {
        nombre: "Limache",
        condicion: "Soleado",
        temp: 22,
        viento: 16,
        humedad: 65,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Olmué",
        condicion: "Nublado",
        temp: 15,
        viento: 19,
        humedad: 78,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":17,"icono":"Soliado.png"},{"dia":"Mar","tempMax":16,"icono":"Soliado.png"},{"dia":"Mie","tempMax":15,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":14,"icono":"Nublado.png"},{"dia":"Vier","tempMax":13,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":15,"icono":"Soliado.png"}]
      },
      {
        nombre: "Laguna Verde",
        condicion: "Parcialmente Nublado",
        temp: 17,
        viento: 23,
        humedad: 76,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":19,"icono":"Soliado.png"},{"dia":"Mar","tempMax":18,"icono":"Soliado.png"},{"dia":"Mie","tempMax":17,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":16,"icono":"Nublado.png"},{"dia":"Vier","tempMax":15,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":17,"icono":"Soliado.png"}]
      },
      {
        nombre: "Con-Con",
        condicion: "Soleado",
        temp: 21,
        viento: 19,
        humedad: 68,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Reñaca",
        condicion: "Parcialmente Nublado",
        temp: 19,
        viento: 21,
        humedad: 74,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      }
    ]
  },
  CLRM: {
    nombre: "Región Metropolitana de Santiago",
    ciudades: [
      {
        nombre: "Santiago",
        condicion: "Soleado",
        temp: 24,
        viento: 12,
        humedad: 45,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pirque",
        condicion: "Parcialmente Nublado",
        temp: 20,
        viento: 15,
        humedad: 55,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puente Alto",
        condicion: "Soleado",
        temp: 22,
        viento: 14,
        humedad: 50,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Maipu",
        condicion: "Soleado",
        temp: 23,
        viento: 13,
        humedad: 48,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "Peñalolén",
        condicion: "Parcialmente Nublado",
        temp: 21,
        viento: 16,
        humedad: 52,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Bernardo",
        condicion: "Soleado",
        temp: 24,
        viento: 12,
        humedad: 46,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "La Florida",
        condicion: "Parcialmente Nublado",
        temp: 22,
        viento: 14,
        humedad: 50,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "La Reina",
        condicion: "Soleado",
        temp: 23,
        viento: 13,
        humedad: 48,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "Providencia",
        condicion: "Soleado",
        temp: 25,
        viento: 11,
        humedad: 44,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":27,"icono":"Soliado.png"},{"dia":"Mar","tempMax":26,"icono":"Soliado.png"},{"dia":"Mie","tempMax":25,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":24,"icono":"Nublado.png"},{"dia":"Vier","tempMax":23,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":25,"icono":"Soliado.png"}]
      }
    ]
  },
  CLLI: {
    nombre: "Libertador General Bernardo O'Higgins",
    ciudades: [
      {
        nombre: "Rancagua",
        condicion: "Soleado",
        temp: 23,
        viento: 13,
        humedad: 48,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Fernando",
        condicion: "Nublado",
        temp: 19,
        viento: 16,
        humedad: 62,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pichilemu",
        condicion: "Parcialmente Nublado",
        temp: 17,
        viento: 25,
        humedad: 78,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":19,"icono":"Soliado.png"},{"dia":"Mar","tempMax":18,"icono":"Soliado.png"},{"dia":"Mie","tempMax":17,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":16,"icono":"Nublado.png"},{"dia":"Vier","tempMax":15,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":17,"icono":"Soliado.png"}]
      },
      {
        nombre: "Rancagua",
        condicion: "Soleado",
        temp: 26,
        viento: 11,
        humedad: 42,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":28,"icono":"Soliado.png"},{"dia":"Mar","tempMax":27,"icono":"Soliado.png"},{"dia":"Mie","tempMax":26,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":25,"icono":"Nublado.png"},{"dia":"Vier","tempMax":24,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":26,"icono":"Soliado.png"}]
      },
      {
        nombre: "Santa Cruz",
        condicion: "Nublado",
        temp: 18,
        viento: 17,
        humedad: 60,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":20,"icono":"Soliado.png"},{"dia":"Mar","tempMax":19,"icono":"Soliado.png"},{"dia":"Mie","tempMax":18,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":17,"icono":"Nublado.png"},{"dia":"Vier","tempMax":16,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":18,"icono":"Soliado.png"}]
      },
      {
        nombre: "Doñihue",
        condicion: "Soleado",
        temp: 23,
        viento: 14,
        humedad: 50,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      },
      {
        nombre: "Graneros",
        condicion: "Parcialmente Nublado",
        temp: 21,
        viento: 15,
        humedad: 54,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Mostazal",
        condicion: "Soleado",
        temp: 24,
        viento: 12,
        humedad: 46,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Machalí",
        condicion: "Soleado",
        temp: 25,
        viento: 13,
        humedad: 44,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":27,"icono":"Soliado.png"},{"dia":"Mar","tempMax":26,"icono":"Soliado.png"},{"dia":"Mie","tempMax":25,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":24,"icono":"Nublado.png"},{"dia":"Vier","tempMax":23,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":25,"icono":"Soliado.png"}]
      }
    ]
  },
  CLML: {
    nombre: "Maule",
    ciudades: [
      {
        nombre: "Talca",
        condicion: "Soleado",
        temp: 22,
        viento: 14,
        humedad: 52,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "Curicó",
        condicion: "Parcialmente Nublado",
        temp: 20,
        viento: 16,
        humedad: 58,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Constitución",
        condicion: "Nublado",
        temp: 16,
        viento: 22,
        humedad: 75,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Linares",
        condicion: "Soleado",
        temp: 22,
        viento: 14,
        humedad: 52,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":24,"icono":"Soliado.png"},{"dia":"Mar","tempMax":23,"icono":"Soliado.png"},{"dia":"Mie","tempMax":22,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":21,"icono":"Nublado.png"},{"dia":"Vier","tempMax":20,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":22,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Clemente",
        condicion: "Parcialmente Nublado",
        temp: 19,
        viento: 15,
        humedad: 60,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      },
      {
        nombre: "Molina",
        condicion: "Soleado",
        temp: 24,
        viento: 13,
        humedad: 48,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":26,"icono":"Soliado.png"},{"dia":"Mar","tempMax":25,"icono":"Soliado.png"},{"dia":"Mie","tempMax":24,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":23,"icono":"Nublado.png"},{"dia":"Vier","tempMax":22,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":24,"icono":"Soliado.png"}]
      },
      {
        nombre: "Longaví",
        condicion: "Parcialmente Nublado",
        temp: 21,
        viento: 16,
        humedad: 55,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Empedrado",
        condicion: "Nublado",
        temp: 17,
        viento: 20,
        humedad: 70,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":19,"icono":"Soliado.png"},{"dia":"Mar","tempMax":18,"icono":"Soliado.png"},{"dia":"Mie","tempMax":17,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":16,"icono":"Nublado.png"},{"dia":"Vier","tempMax":15,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":17,"icono":"Soliado.png"}]
      },
      {
        nombre: "Retiro",
        condicion: "Soleado",
        temp: 23,
        viento: 14,
        humedad: 50,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":25,"icono":"Soliado.png"},{"dia":"Mar","tempMax":24,"icono":"Soliado.png"},{"dia":"Mie","tempMax":23,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":22,"icono":"Nublado.png"},{"dia":"Vier","tempMax":21,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":23,"icono":"Soliado.png"}]
      }
    ]
  },
  CLBI: {
    nombre: "Bío-Bío",
    ciudades: [
      {
        nombre: "Concepción",
        condicion: "Nublado",
        temp: 15,
        viento: 20,
        humedad: 80,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":17,"icono":"Soliado.png"},{"dia":"Mar","tempMax":16,"icono":"Soliado.png"},{"dia":"Mie","tempMax":15,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":14,"icono":"Nublado.png"},{"dia":"Vier","tempMax":13,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":15,"icono":"Soliado.png"}]
      },
      {
        nombre: "Los Ángeles",
        condicion: "Lluvia",
        temp: 14,
        viento: 18,
        humedad: 85,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":16,"icono":"Soliado.png"},{"dia":"Mar","tempMax":15,"icono":"Soliado.png"},{"dia":"Mie","tempMax":14,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":13,"icono":"Nublado.png"},{"dia":"Vier","tempMax":12,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":14,"icono":"Soliado.png"}]
      },
      {
        nombre: "Temuco",
        condicion: "Parcialmente Nublado",
        temp: 16,
        viento: 17,
        humedad: 72,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Talcahuano",
        condicion: "Nublado",
        temp: 14,
        viento: 22,
        humedad: 82,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":16,"icono":"Soliado.png"},{"dia":"Mar","tempMax":15,"icono":"Soliado.png"},{"dia":"Mie","tempMax":14,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":13,"icono":"Nublado.png"},{"dia":"Vier","tempMax":12,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":14,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Pedro de la Paz",
        condicion: "Lluvia",
        temp: 13,
        viento: 19,
        humedad: 84,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":15,"icono":"Soliado.png"},{"dia":"Mar","tempMax":14,"icono":"Soliado.png"},{"dia":"Mie","tempMax":13,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":12,"icono":"Nublado.png"},{"dia":"Vier","tempMax":11,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":13,"icono":"Soliado.png"}]
      },
      {
        nombre: "Chillán",
        condicion: "Parcialmente Nublado",
        temp: 17,
        viento: 16,
        humedad: 68,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":19,"icono":"Soliado.png"},{"dia":"Mar","tempMax":18,"icono":"Soliado.png"},{"dia":"Mie","tempMax":17,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":16,"icono":"Nublado.png"},{"dia":"Vier","tempMax":15,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":17,"icono":"Soliado.png"}]
      },
      {
        nombre: "Arauco",
        condicion: "Nublado",
        temp: 15,
        viento: 21,
        humedad: 78,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":17,"icono":"Soliado.png"},{"dia":"Mar","tempMax":16,"icono":"Soliado.png"},{"dia":"Mie","tempMax":15,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":14,"icono":"Nublado.png"},{"dia":"Vier","tempMax":13,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":15,"icono":"Soliado.png"}]
      },
      {
        nombre: "Lebu",
        condicion: "Lluvia",
        temp: 14,
        viento: 20,
        humedad: 80,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":16,"icono":"Soliado.png"},{"dia":"Mar","tempMax":15,"icono":"Soliado.png"},{"dia":"Mie","tempMax":14,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":13,"icono":"Nublado.png"},{"dia":"Vier","tempMax":12,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":14,"icono":"Soliado.png"}]
      },
      {
        nombre: "Tomé",
        condicion: "Nublado",
        temp: 15,
        viento: 19,
        humedad: 79,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":17,"icono":"Soliado.png"},{"dia":"Mar","tempMax":16,"icono":"Soliado.png"},{"dia":"Mie","tempMax":15,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":14,"icono":"Nublado.png"},{"dia":"Vier","tempMax":13,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":15,"icono":"Soliado.png"}]
      }
    ]
  },
  CLAR: {
    nombre: "La Araucanía",
    ciudades: [
      {
        nombre: "Temuco",
        condicion: "Lluvia",
        temp: 13,
        viento: 19,
        humedad: 82,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":15,"icono":"Soliado.png"},{"dia":"Mar","tempMax":14,"icono":"Soliado.png"},{"dia":"Mie","tempMax":13,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":12,"icono":"Nublado.png"},{"dia":"Vier","tempMax":11,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":13,"icono":"Soliado.png"}]
      },
      {
        nombre: "Villarrica",
        condicion: "Tormenta",
        temp: 11,
        viento: 28,
        humedad: 88,
        icono: "tormentaElectrica.png",
        semana: [{"dia":"Lun","tempMax":13,"icono":"Soliado.png"},{"dia":"Mar","tempMax":12,"icono":"Soliado.png"},{"dia":"Mie","tempMax":11,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":10,"icono":"Nublado.png"},{"dia":"Vier","tempMax":9,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":11,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pucón",
        condicion: "Lluvia",
        temp: 12,
        viento: 22,
        humedad: 80,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":14,"icono":"Soliado.png"},{"dia":"Mar","tempMax":13,"icono":"Soliado.png"},{"dia":"Mie","tempMax":12,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":11,"icono":"Nublado.png"},{"dia":"Vier","tempMax":10,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":12,"icono":"Soliado.png"}]
      },
      {
        nombre: "Curarrehue",
        condicion: "Nublado",
        temp: 10,
        viento: 25,
        humedad: 85,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":12,"icono":"Soliado.png"},{"dia":"Mar","tempMax":11,"icono":"Soliado.png"},{"dia":"Mie","tempMax":10,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":9,"icono":"Nublado.png"},{"dia":"Vier","tempMax":8,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":10,"icono":"Soliado.png"}]
      },
      {
        nombre: "Traiguén",
        condicion: "Lluvia",
        temp: 14,
        viento: 20,
        humedad: 81,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":16,"icono":"Soliado.png"},{"dia":"Mar","tempMax":15,"icono":"Soliado.png"},{"dia":"Mie","tempMax":14,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":13,"icono":"Nublado.png"},{"dia":"Vier","tempMax":12,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":14,"icono":"Soliado.png"}]
      },
      {
        nombre: "Collipulli",
        condicion: "Parcialmente Nublado",
        temp: 15,
        viento: 18,
        humedad: 75,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":17,"icono":"Soliado.png"},{"dia":"Mar","tempMax":16,"icono":"Soliado.png"},{"dia":"Mie","tempMax":15,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":14,"icono":"Nublado.png"},{"dia":"Vier","tempMax":13,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":15,"icono":"Soliado.png"}]
      },
      {
        nombre: "Angol",
        condicion: "Nublado",
        temp: 16,
        viento: 17,
        humedad: 73,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Perquenco",
        condicion: "Lluvia",
        temp: 12,
        viento: 21,
        humedad: 79,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":14,"icono":"Soliado.png"},{"dia":"Mar","tempMax":13,"icono":"Soliado.png"},{"dia":"Mie","tempMax":12,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":11,"icono":"Nublado.png"},{"dia":"Vier","tempMax":10,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":12,"icono":"Soliado.png"}]
      },
      {
        nombre: "Nueva Imperial",
        condicion: "Nublado",
        temp: 14,
        viento: 19,
        humedad: 77,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":16,"icono":"Soliado.png"},{"dia":"Mar","tempMax":15,"icono":"Soliado.png"},{"dia":"Mie","tempMax":14,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":13,"icono":"Nublado.png"},{"dia":"Vier","tempMax":12,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":14,"icono":"Soliado.png"}]
      }
    ]
  },
  CLLR: {
    nombre: "Los Ríos",
    ciudades: [
      {
        nombre: "Valdivia",
        condicion: "Lluvia",
        temp: 12,
        viento: 20,
        humedad: 83,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":14,"icono":"Soliado.png"},{"dia":"Mar","tempMax":13,"icono":"Soliado.png"},{"dia":"Mie","tempMax":12,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":11,"icono":"Nublado.png"},{"dia":"Vier","tempMax":10,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":12,"icono":"Soliado.png"}]
      },
      {
        nombre: "La Unión",
        condicion: "Nublado",
        temp: 13,
        viento: 18,
        humedad: 81,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":15,"icono":"Soliado.png"},{"dia":"Mar","tempMax":14,"icono":"Soliado.png"},{"dia":"Mie","tempMax":13,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":12,"icono":"Nublado.png"},{"dia":"Vier","tempMax":11,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":13,"icono":"Soliado.png"}]
      },
      {
        nombre: "Río Bueno",
        condicion: "Lluvia",
        temp: 11,
        viento: 21,
        humedad: 85,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":13,"icono":"Soliado.png"},{"dia":"Mar","tempMax":12,"icono":"Soliado.png"},{"dia":"Mie","tempMax":11,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":10,"icono":"Nublado.png"},{"dia":"Vier","tempMax":9,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":11,"icono":"Soliado.png"}]
      },
      {
        nombre: "Panguipulli",
        condicion: "Nublado",
        temp: 10,
        viento: 22,
        humedad: 82,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":12,"icono":"Soliado.png"},{"dia":"Mar","tempMax":11,"icono":"Soliado.png"},{"dia":"Mie","tempMax":10,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":9,"icono":"Nublado.png"},{"dia":"Vier","tempMax":8,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":10,"icono":"Soliado.png"}]
      },
      {
        nombre: "Lanco",
        condicion: "Lluvia",
        temp: 12,
        viento: 19,
        humedad: 84,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":14,"icono":"Soliado.png"},{"dia":"Mar","tempMax":13,"icono":"Soliado.png"},{"dia":"Mie","tempMax":12,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":11,"icono":"Nublado.png"},{"dia":"Vier","tempMax":10,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":12,"icono":"Soliado.png"}]
      },
      {
        nombre: "Máfil",
        condicion: "Parcialmente Nublado",
        temp: 13,
        viento: 17,
        humedad: 80,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":15,"icono":"Soliado.png"},{"dia":"Mar","tempMax":14,"icono":"Soliado.png"},{"dia":"Mie","tempMax":13,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":12,"icono":"Nublado.png"},{"dia":"Vier","tempMax":11,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":13,"icono":"Soliado.png"}]
      },
      {
        nombre: "Mariquina",
        condicion: "Nublado",
        temp: 11,
        viento: 20,
        humedad: 83,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":13,"icono":"Soliado.png"},{"dia":"Mar","tempMax":12,"icono":"Soliado.png"},{"dia":"Mie","tempMax":11,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":10,"icono":"Nublado.png"},{"dia":"Vier","tempMax":9,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":11,"icono":"Soliado.png"}]
      },
      {
        nombre: "Futrono",
        condicion: "Lluvia",
        temp: 10,
        viento: 23,
        humedad: 86,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":12,"icono":"Soliado.png"},{"dia":"Mar","tempMax":11,"icono":"Soliado.png"},{"dia":"Mie","tempMax":10,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":9,"icono":"Nublado.png"},{"dia":"Vier","tempMax":8,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":10,"icono":"Soliado.png"}]
      },
      {
        nombre: "Los Lagos",
        condicion: "Nublado",
        temp: 9,
        viento: 24,
        humedad: 87,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":11,"icono":"Soliado.png"},{"dia":"Mar","tempMax":10,"icono":"Soliado.png"},{"dia":"Mie","tempMax":9,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":8,"icono":"Nublado.png"},{"dia":"Vier","tempMax":7,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":9,"icono":"Soliado.png"}]
      }
    ]
  },
  CLLL: {
    nombre: "Los Lagos",
    ciudades: [
      {
        nombre: "Puerto Montt",
        condicion: "Lluvia",
        temp: 11,
        viento: 22,
        humedad: 86,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":13,"icono":"Soliado.png"},{"dia":"Mar","tempMax":12,"icono":"Soliado.png"},{"dia":"Mie","tempMax":11,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":10,"icono":"Nublado.png"},{"dia":"Vier","tempMax":9,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":11,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puerto Varas",
        condicion: "Nublado",
        temp: 12,
        viento: 20,
        humedad: 80,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":14,"icono":"Soliado.png"},{"dia":"Mar","tempMax":13,"icono":"Soliado.png"},{"dia":"Mie","tempMax":12,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":11,"icono":"Nublado.png"},{"dia":"Vier","tempMax":10,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":12,"icono":"Soliado.png"}]
      },
      {
        nombre: "Osorno",
        condicion: "Lluvia",
        temp: 10,
        viento: 23,
        humedad: 84,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":12,"icono":"Soliado.png"},{"dia":"Mar","tempMax":11,"icono":"Soliado.png"},{"dia":"Mie","tempMax":10,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":9,"icono":"Nublado.png"},{"dia":"Vier","tempMax":8,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":10,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puerto Octay",
        condicion: "Nublado",
        temp: 11,
        viento: 21,
        humedad: 82,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":13,"icono":"Soliado.png"},{"dia":"Mar","tempMax":12,"icono":"Soliado.png"},{"dia":"Mie","tempMax":11,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":10,"icono":"Nublado.png"},{"dia":"Vier","tempMax":9,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":11,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puyehue",
        condicion: "Lluvia",
        temp: 9,
        viento: 25,
        humedad: 87,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":11,"icono":"Soliado.png"},{"dia":"Mar","tempMax":10,"icono":"Soliado.png"},{"dia":"Mie","tempMax":9,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":8,"icono":"Nublado.png"},{"dia":"Vier","tempMax":7,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":9,"icono":"Soliado.png"}]
      },
      {
        nombre: "Purranque",
        condicion: "Parcialmente Nublado",
        temp: 12,
        viento: 19,
        humedad: 81,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":14,"icono":"Soliado.png"},{"dia":"Mar","tempMax":13,"icono":"Soliado.png"},{"dia":"Mie","tempMax":12,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":11,"icono":"Nublado.png"},{"dia":"Vier","tempMax":10,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":12,"icono":"Soliado.png"}]
      },
      {
        nombre: "Futrono",
        condicion: "Nublado",
        temp: 10,
        viento: 22,
        humedad: 84,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":12,"icono":"Soliado.png"},{"dia":"Mar","tempMax":11,"icono":"Soliado.png"},{"dia":"Mie","tempMax":10,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":9,"icono":"Nublado.png"},{"dia":"Vier","tempMax":8,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":10,"icono":"Soliado.png"}]
      },
      {
        nombre: "Llanquihue",
        condicion: "Lluvia",
        temp: 11,
        viento: 23,
        humedad: 85,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":13,"icono":"Soliado.png"},{"dia":"Mar","tempMax":12,"icono":"Soliado.png"},{"dia":"Mie","tempMax":11,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":10,"icono":"Nublado.png"},{"dia":"Vier","tempMax":9,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":11,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Pablo",
        condicion: "Nublado",
        temp: 10,
        viento: 21,
        humedad: 83,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":12,"icono":"Soliado.png"},{"dia":"Mar","tempMax":11,"icono":"Soliado.png"},{"dia":"Mie","tempMax":10,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":9,"icono":"Nublado.png"},{"dia":"Vier","tempMax":8,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":10,"icono":"Soliado.png"}]
      }
    ]
  },
  CLAI: {
    nombre: "Aysén",
    ciudades: [
      {
        nombre: "Coyhaique",
        condicion: "Lluvia",
        temp: 8,
        viento: 25,
        humedad: 85,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":10,"icono":"Soliado.png"},{"dia":"Mar","tempMax":9,"icono":"Soliado.png"},{"dia":"Mie","tempMax":8,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":7,"icono":"Nublado.png"},{"dia":"Vier","tempMax":6,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":8,"icono":"Soliado.png"}]
      },
      {
        nombre: "La Junta",
        condicion: "Tormenta",
        temp: 7,
        viento: 30,
        humedad: 88,
        icono: "tormentaElectrica.png",
        semana: [{"dia":"Lun","tempMax":9,"icono":"Soliado.png"},{"dia":"Mar","tempMax":8,"icono":"Soliado.png"},{"dia":"Mie","tempMax":7,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":6,"icono":"Nublado.png"},{"dia":"Vier","tempMax":5,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":7,"icono":"Soliado.png"}]
      },
      {
        nombre: "Balmaceda",
        condicion: "Nublado",
        temp: 6,
        viento: 28,
        humedad: 82,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":8,"icono":"Soliado.png"},{"dia":"Mar","tempMax":7,"icono":"Soliado.png"},{"dia":"Mie","tempMax":6,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":5,"icono":"Nublado.png"},{"dia":"Vier","tempMax":4,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":6,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puerto Aysén",
        condicion: "Lluvia",
        temp: 7,
        viento: 27,
        humedad: 86,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":9,"icono":"Soliado.png"},{"dia":"Mar","tempMax":8,"icono":"Soliado.png"},{"dia":"Mie","tempMax":7,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":6,"icono":"Nublado.png"},{"dia":"Vier","tempMax":5,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":7,"icono":"Soliado.png"}]
      },
      {
        nombre: "Cisnes",
        condicion: "Nublado",
        temp: 6,
        viento: 29,
        humedad: 84,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":8,"icono":"Soliado.png"},{"dia":"Mar","tempMax":7,"icono":"Soliado.png"},{"dia":"Mie","tempMax":6,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":5,"icono":"Nublado.png"},{"dia":"Vier","tempMax":4,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":6,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puyuhuapi",
        condicion: "Lluvia",
        temp: 5,
        viento: 31,
        humedad: 87,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":7,"icono":"Soliado.png"},{"dia":"Mar","tempMax":6,"icono":"Soliado.png"},{"dia":"Mie","tempMax":5,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":4,"icono":"Nublado.png"},{"dia":"Vier","tempMax":3,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":5,"icono":"Soliado.png"}]
      },
      {
        nombre: "Martínez de Pérez Caron",
        condicion: "Nublado",
        temp: 7,
        viento: 26,
        humedad: 83,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":9,"icono":"Soliado.png"},{"dia":"Mar","tempMax":8,"icono":"Soliado.png"},{"dia":"Mie","tempMax":7,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":6,"icono":"Nublado.png"},{"dia":"Vier","tempMax":5,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":7,"icono":"Soliado.png"}]
      },
      {
        nombre: "Villa Santa Lucía",
        condicion: "Lluvia",
        temp: 6,
        viento: 28,
        humedad: 85,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":8,"icono":"Soliado.png"},{"dia":"Mar","tempMax":7,"icono":"Soliado.png"},{"dia":"Mie","tempMax":6,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":5,"icono":"Nublado.png"},{"dia":"Vier","tempMax":4,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":6,"icono":"Soliado.png"}]
      },
      {
        nombre: "Guaitecas",
        condicion: "Parcialmente Nublado",
        temp: 5,
        viento: 30,
        humedad: 86,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":7,"icono":"Soliado.png"},{"dia":"Mar","tempMax":6,"icono":"Soliado.png"},{"dia":"Mie","tempMax":5,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":4,"icono":"Nublado.png"},{"dia":"Vier","tempMax":3,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":5,"icono":"Soliado.png"}]
      }
    ]
  },
  CLMA: {
    nombre: "Magallanes",
    ciudades: [
      {
        nombre: "Punta Arenas",
        condicion: "Viento",
        temp: 5,
        viento: 35,
        humedad: 75,
        icono: "viento.png",
        semana: [{"dia":"Lun","tempMax":7,"icono":"Soliado.png"},{"dia":"Mar","tempMax":6,"icono":"Soliado.png"},{"dia":"Mie","tempMax":5,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":4,"icono":"Nublado.png"},{"dia":"Vier","tempMax":3,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":5,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puerto Natales",
        condicion: "Lluvia",
        temp: 4,
        viento: 32,
        humedad: 80,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":6,"icono":"Soliado.png"},{"dia":"Mar","tempMax":5,"icono":"Soliado.png"},{"dia":"Mie","tempMax":4,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":3,"icono":"Nublado.png"},{"dia":"Vier","tempMax":2,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":4,"icono":"Soliado.png"}]
      },
      {
        nombre: "Río Gallegos",
        condicion: "Viento",
        temp: 3,
        viento: 38,
        humedad: 70,
        icono: "viento.png",
        semana: [{"dia":"Lun","tempMax":5,"icono":"Soliado.png"},{"dia":"Mar","tempMax":4,"icono":"Soliado.png"},{"dia":"Mie","tempMax":3,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":2,"icono":"Nublado.png"},{"dia":"Vier","tempMax":1,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":3,"icono":"Soliado.png"}]
      },
      {
        nombre: "Cerro Sombrero",
        condicion: "Viento",
        temp: 4,
        viento: 36,
        humedad: 72,
        icono: "viento.png",
        semana: [{"dia":"Lun","tempMax":6,"icono":"Soliado.png"},{"dia":"Mar","tempMax":5,"icono":"Soliado.png"},{"dia":"Mie","tempMax":4,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":3,"icono":"Nublado.png"},{"dia":"Vier","tempMax":2,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":4,"icono":"Soliado.png"}]
      },
      {
        nombre: "Laguna Blanca",
        condicion: "Lluvia",
        temp: 2,
        viento: 34,
        humedad: 78,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":4,"icono":"Soliado.png"},{"dia":"Mar","tempMax":3,"icono":"Soliado.png"},{"dia":"Mie","tempMax":2,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":1,"icono":"Nublado.png"},{"dia":"Vier","tempMax":0,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":2,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Gregorio",
        condicion: "Viento",
        temp: 3,
        viento: 37,
        humedad: 71,
        icono: "viento.png",
        semana: [{"dia":"Lun","tempMax":5,"icono":"Soliado.png"},{"dia":"Mar","tempMax":4,"icono":"Soliado.png"},{"dia":"Mie","tempMax":3,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":2,"icono":"Nublado.png"},{"dia":"Vier","tempMax":1,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":3,"icono":"Soliado.png"}]
      },
      {
        nombre: "Puerto Williams",
        condicion: "Lluvia",
        temp: 2,
        viento: 35,
        humedad: 82,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":4,"icono":"Soliado.png"},{"dia":"Mar","tempMax":3,"icono":"Soliado.png"},{"dia":"Mie","tempMax":2,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":1,"icono":"Nublado.png"},{"dia":"Vier","tempMax":0,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":2,"icono":"Soliado.png"}]
      },
      {
        nombre: "Timaukel",
        condicion: "Viento",
        temp: 2,
        viento: 39,
        humedad: 68,
        icono: "viento.png",
        semana: [{"dia":"Lun","tempMax":4,"icono":"Soliado.png"},{"dia":"Mar","tempMax":3,"icono":"Soliado.png"},{"dia":"Mie","tempMax":2,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":1,"icono":"Nublado.png"},{"dia":"Vier","tempMax":0,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":2,"icono":"Soliado.png"}]
      },
      {
        nombre: "Primavera",
        condicion: "Lluvia",
        temp: 3,
        viento: 36,
        humedad: 76,
        icono: "lluvia.png",
        semana: [{"dia":"Lun","tempMax":5,"icono":"Soliado.png"},{"dia":"Mar","tempMax":4,"icono":"Soliado.png"},{"dia":"Mie","tempMax":3,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":2,"icono":"Nublado.png"},{"dia":"Vier","tempMax":1,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":3,"icono":"Soliado.png"}]
      }
    ]
  },
  CLNB: {
    nombre: "Región de Ñuble",
    ciudades: [
      {
        nombre: "Chillán",
        condicion: "Parcialmente Nublado",
        temp: 18,
        viento: 15,
        humedad: 65,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":20,"icono":"Soliado.png"},{"dia":"Mar","tempMax":19,"icono":"Soliado.png"},{"dia":"Mie","tempMax":18,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":17,"icono":"Nublado.png"},{"dia":"Vier","tempMax":16,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":18,"icono":"Soliado.png"}]
      },
      {
        nombre: "San Carlos",
        condicion: "Soleado",
        temp: 20,
        viento: 12,
        humedad: 60,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      },
      {
        nombre: "Ñiquén",
        condicion: "Nublado",
        temp: 16,
        viento: 18,
        humedad: 70,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":18,"icono":"Soliado.png"},{"dia":"Mar","tempMax":17,"icono":"Soliado.png"},{"dia":"Mie","tempMax":16,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":15,"icono":"Nublado.png"},{"dia":"Vier","tempMax":14,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":16,"icono":"Soliado.png"}]
      },
      {
        nombre: "Recinto",
        condicion: "Soleado",
        temp: 19,
        viento: 14,
        humedad: 62,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":21,"icono":"Soliado.png"},{"dia":"Mar","tempMax":20,"icono":"Soliado.png"},{"dia":"Mie","tempMax":19,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":18,"icono":"Nublado.png"},{"dia":"Vier","tempMax":17,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":19,"icono":"Soliado.png"}]
      },
      {
        nombre: "Yungay",
        condicion: "Parcialmente Nublado",
        temp: 17,
        viento: 16,
        humedad: 66,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":19,"icono":"Soliado.png"},{"dia":"Mar","tempMax":18,"icono":"Soliado.png"},{"dia":"Mie","tempMax":17,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":16,"icono":"Nublado.png"},{"dia":"Vier","tempMax":15,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":17,"icono":"Soliado.png"}]
      },
      {
        nombre: "El Carmen",
        condicion: "Soleado",
        temp: 21,
        viento: 13,
        humedad: 58,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":23,"icono":"Soliado.png"},{"dia":"Mar","tempMax":22,"icono":"Soliado.png"},{"dia":"Mie","tempMax":21,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":20,"icono":"Nublado.png"},{"dia":"Vier","tempMax":19,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":21,"icono":"Soliado.png"}]
      },
      {
        nombre: "Coihueco",
        condicion: "Nublado",
        temp: 15,
        viento: 19,
        humedad: 72,
        icono: "Nublado.png",
        semana: [{"dia":"Lun","tempMax":17,"icono":"Soliado.png"},{"dia":"Mar","tempMax":16,"icono":"Soliado.png"},{"dia":"Mie","tempMax":15,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":14,"icono":"Nublado.png"},{"dia":"Vier","tempMax":13,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":15,"icono":"Soliado.png"}]
      },
      {
        nombre: "Pemuco",
        condicion: "Parcialmente Nublado",
        temp: 18,
        viento: 15,
        humedad: 64,
        icono: "ParcialNublado.png",
        semana: [{"dia":"Lun","tempMax":20,"icono":"Soliado.png"},{"dia":"Mar","tempMax":19,"icono":"Soliado.png"},{"dia":"Mie","tempMax":18,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":17,"icono":"Nublado.png"},{"dia":"Vier","tempMax":16,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":18,"icono":"Soliado.png"}]
      },
      {
        nombre: "Portezuelo",
        condicion: "Soleado",
        temp: 20,
        viento: 13,
        humedad: 59,
        icono: "Soliado.png",
        semana: [{"dia":"Lun","tempMax":22,"icono":"Soliado.png"},{"dia":"Mar","tempMax":21,"icono":"Soliado.png"},{"dia":"Mie","tempMax":20,"icono":"ParcialNublado.png"},{"dia":"Jue","tempMax":19,"icono":"Nublado.png"},{"dia":"Vier","tempMax":18,"icono":"Lluvia.png"},{"dia":"Sab","tempMax":20,"icono":"Soliado.png"}]
      }
    ]
  }
};
