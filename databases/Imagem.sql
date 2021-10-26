
create table satelite(
id_sat serial primary key,
nome_sat text,
url_sat text
);

create table imagem(
id_imag serial primary key,
id_sat int not null references satelite(id_sat),
camera_imag text,
proces_imag text,
caminho_imag text,
dat_imag interval,
coord_imag polygon,
nuvem_imag numeric,
elev_sol_imag numeric,
azim_sol_imag numeric
);

create table bandas (
id_band serial primary key,
id_imag int not null references imagem (id_imag),
faixa_band numeric,
cor_band text
);