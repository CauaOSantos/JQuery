$(document).ready(function() {
    $('#fetchPokemonButton').on('click', function() {
        const pokemonQuery = $('#pokemonNameInput').val().toLowerCase().trim();
        if (!pokemonQuery) {
            $('#errorMessage').text('Por favor, digite o nome ou ID de um Pokémon.');
            $('#pokemonResult').hide();
            return;
        }

        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonQuery}/`;

        $('#errorMessage').text(''); // Limpa mensagens de erro anteriores
        $('#pokemonResult').hide(); // Esconde resultados anteriores

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data) {
                // Preenche os dados do Pokémon
                $('#pokemonName').text(data.name.charAt(0).toUpperCase() + data.name.slice(1));
                $('#pokemonImage').attr('src', data.sprites.front_default).attr('alt', data.name);
                $('#pokemonId').text(data.id);
                $('#pokemonHeight').text(data.height / 10 + ' m'); // Altura em decímetros, convertendo para metros
                $('#pokemonWeight').text(data.weight / 10 + ' kg'); // Peso em hectogramas, convertendo para kg

                let types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
                $('#pokemonTypes').text(types);

                $('#pokemonResult').show(); // Mostra o card de informações
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Erro ao buscar dados:", textStatus, errorThrown);
                if (jqXHR.status === 404) {
                    $('#errorMessage').text(`Pokémon "${pokemonQuery}" não encontrado. Verifique o nome ou ID.`);
                } else {
                    $('#errorMessage').text('Ocorreu um erro ao buscar os dados do Pokémon.');
                }
                $('#pokemonResult').hide();
            }
        });
    });
});