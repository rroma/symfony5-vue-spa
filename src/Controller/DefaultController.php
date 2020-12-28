<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     * @Route("/{route}", name="vue_index", requirements={"route"="^(?!.*_wdt|_profiler|api).+"})
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }
}
