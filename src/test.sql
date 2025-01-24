
SELECT * FROM public.vehicle

INSERT INTO public.vehicle(
    vehicle_id, vehicle_name, vin, make, model, year)
VALUES (111, 'car 111', 'vvv111', 'mmm111', 'model111', 1111);

INSERT INTO public.vehicle(
    vehicle_id, vehicle_name, vin, make, model, year)
VALUES (222, 'moto 222', 'vvv222', 'mmm222', 'model222', 2222);


SELECT *
FROM vehicle AS vv
LEFT JOIN vehicle_part AS pp TO vv.vehicle_name = pp.vehicle_id



